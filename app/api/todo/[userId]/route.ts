import { getAllTodoForUser } from "~/app/data/todo-items";
import { corsHeaders } from "../../constants";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: userId } = await params;
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
