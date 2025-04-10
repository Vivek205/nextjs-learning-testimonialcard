import { getAllUser } from "~/app/data/data";

export async function GET() {
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
