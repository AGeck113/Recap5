import { render, screen } from "@testing-library/react";
import HomePage from ".";

const testPicture = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: { height: 2432, width: 1920, type: "jpg" },
};
test("All art pieces are displayed as a list", () => {
  render(<HomePage art={testPicture} />);
  const list = screen.getByText(testPicture.slug);
  expect(list).toBeInTheDocument();
});

test("renders a image", () => {
  render(<HomePage art={testPicture} />);
  const image = screen.getByRole("Image", (src = testPicture.imageSource));
  expect(image).toBeInTheDocument();
});
test("renders a title", () => {
  render(<HomePage art={testPicture} />);
  const title = screen.getByText(testPicture.name);
  expect(title).toBeInTheDocument();
});
test("renders a artist", () => {
  render(<HomePage art={testPicture} />);
  const artist = screen.getByText(testPicture.artist);
  expect(artist).toBeInTheDocument();
});
