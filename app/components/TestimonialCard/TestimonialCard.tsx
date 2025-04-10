import Image from "next/image";
import { FC } from "react";
import type { TestimonialCardProps } from "./types";

export const TestimonialCard: FC<TestimonialCardProps> = ({
  content,
  imageAlt,
  imageSrc,
  name,
  userName,
}) => (
  <div className="bg-white rounded-md w-full lg:w-96 p-4 min-w-4/5 lg:min-w-96">
    <div className="flex gap-2">
      <Image src={imageSrc} alt={imageAlt} height={50} width={50} />
      <div>
        <p className="font-bold">{name}</p>
        <p>@{userName}</p>
      </div>
    </div>

    <p className="pt-2">{content}</p>
  </div>
);
