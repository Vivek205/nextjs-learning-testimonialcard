import postgres from "postgres";
import { User, UserModel } from "./types";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const getAllUser = async (): Promise<User[]> => {
  const users = await sql<
    UserModel[]
  >`SELECT id, name, email, password, thumbnail_src, thumbnail_alt, username, bio from USERS`;
  return users.map(
    ({ id, name, username, thumbnail_alt, thumbnail_src, bio }) => ({
      content: bio,
      id,
      name,
      thumbnailAlt: thumbnail_alt,
      thumbnailSrc: thumbnail_src,
      username,
    })
  );
};
