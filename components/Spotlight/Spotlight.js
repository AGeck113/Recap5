import Image from "next/image";
import FavButton from "../FavButton";

export default function Spotlight({ randomPiece }) {
  console.log(randomPiece);
  return (
    <article>
      <h2>{randomPiece.name}</h2>
      <FavButton isFavorite={randomPiece.isFavorite} slug={randomPiece.slug} />
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={randomPiece.dimensions.width * 0.5}
        height={randomPiece.dimensions.height * 0.5}
      />
    </article>
  );
}
