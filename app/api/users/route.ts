import { getAllUser } from "~/app/data/data";

export async function GET(request: Request, response: Response) {
  try {
    const users = await getAllUser();
    return Response.json(
      {
        data: users,
      },
      { status: 200, statusText: "OK" }
    );
  } catch (error: any) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
