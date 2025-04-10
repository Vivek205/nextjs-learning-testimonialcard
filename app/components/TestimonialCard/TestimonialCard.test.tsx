import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { TestimonialCard } from "./TestimonialCard";

const defaultProps = {
  name: "Sarah Dole",
  userName: "@sarahdole",
  imageSrc: "/profile-thumbnail.png",
  imageAlt: "profile-pic-of-the-user",
  content:
    "I've been struggling for high quality abstract images for my project, and I'm thrilled to have found this platform. The variety and the depth of the creativity are astounding!",
};

test("TestimonialCard", async () => {
  render(<TestimonialCard {...defaultProps} />);
  expect(screen.getByText(defaultProps.name));
  expect(screen.getByText(`@${defaultProps.userName}`)).toBeDefined();
  expect(screen.getByRole("img").getAttribute("src")).toContain(
    encodeURI(defaultProps.imageSrc.substring(1))
  );
  expect(screen.getByAltText(defaultProps.imageAlt)).toBeDefined();
  expect(screen.getByText(defaultProps.content)).toBeDefined();
});
