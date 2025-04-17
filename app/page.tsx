import TestimonialCard from "~/app/components/TestimonialCard";
import { getAllUser } from "./data/users";
import { User } from "./data/users/types";

export default async function Home() {
  let users: User[] = [];
  try {
    users = await getAllUser();
  } catch (error) {
    console.log("Get Users error", error);
  }

  return (
    <div className="w-full  flex justify-center">
      <div className="flex flex-row md:flex-col lg:flex-row justify-between lg:p-5 md:justify-start gap-y-2 gap-x-2 p-3 md:px-2 lg:px-5 w-full flex-wrap">
        {users.map(
          ({ id, name, thumbnailSrc, thumbnailAlt, content, username }) => (
            <TestimonialCard
              key={id}
              name={name}
              userName={username}
              imageSrc={thumbnailSrc}
              imageAlt={thumbnailAlt}
              content={content}
            />
          )
        )}
      </div>
    </div>
  );
}
