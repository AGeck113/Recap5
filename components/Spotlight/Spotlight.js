import Image from "next/image";

export default function Spotlight({ randomPiece }) {
  console.log(randomPiece);
  return (
    <article>
      <h2>{randomPiece.name}</h2>
      <Image
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
      />
    </article>
  );
}
