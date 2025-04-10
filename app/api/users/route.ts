import { getAllUser } from "~/app/data/data";

export async function GET(request: Request) {
  // Handle preflight OPTIONS request
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*", // Replace * with your app domain if needed
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    const users = await getAllUser();
    return Response.json(
      {
        data: users,
      },
      { status: 200, statusText: "OK" }
    );
  } catch (error: unknown) {
    return Response.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
