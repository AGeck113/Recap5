import { render, screen } from "@testing-library/react";
import ArtPieces from "../../pages";

const testPicture = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  },
];
test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={testPicture} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders a image", () => {
  render(<ArtPieces pieces={testPicture} />);
  const image = screen.getByRole("Image", (src = testPicture.imageSource));
  expect(image).toBeInTheDocument();
});
test("renders a title", () => {
  render(<ArtPieces pieces={testPicture} />);
  const title = screen.getByText(testPicture.name);
  expect(title).toBeInTheDocument();
});
test("renders a artist", () => {
  render(<ArtPieces pieces={testPicture} />);
  const artist = screen.getByText(testPicture.artist);
  expect(artist).toBeInTheDocument();
});
