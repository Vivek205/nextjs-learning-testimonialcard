import { getAllTodoForUser } from "~/app/data/todo-items";
import { corsHeaders } from "../constants";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      throw new Error("Invalid UserId");
    }

    const todoItems = await getAllTodoForUser(userId);
    return Response.json(
      {
        data: todoItems,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    return Response.json(
      {
        message: (error as Error).message,
      },
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}
