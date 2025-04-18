import { getAllUser } from "~/app/data/users";
import { corsHeaders } from "../constants";

export async function GET() {
  try {
    const users = await getAllUser();
    return Response.json(
      {
        data: users,
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
