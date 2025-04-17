import postgres from "postgres";
import { TodoItem, TodoItemModel } from "./types";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const getAllTodoForUser = async (
  userId: string
): Promise<TodoItem[]> => {
  const data = await sql<TodoItemModel[]>`
        SELECT id, title, content, is_marked_complete, due_date
        FROM TODO_LIST 
        WHERE user_id = ${userId}
    `;
  return data.map((item) => ({
    ...item,
    isMarkedComplete: item.is_marked_complete,
    dueDate: item.due_date,
  }));
};
