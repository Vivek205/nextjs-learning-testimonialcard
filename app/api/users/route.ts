import { getAllUser } from "~/app/data/data";

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
          "Access-Control-Allow-Origin": "*", // Or your specific domain
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
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// ✅ Handle preflight OPTIONS request
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
