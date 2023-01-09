import Image from "next/image";
import Link from "next/link";
import FavButton from "../FavButton";
export default function ArtPiecePreview({
  slug,
  name,
  imageSource,
  artist,
  width,
  height,
  isFavorite,
}) {
  return (
    <>
      <li key={slug}>
        <h2>{name}</h2>
        <p>{artist}</p>
        <FavButton slug={slug} isFavorite={isFavorite} />
        <Image
          src={imageSource}
          alt={name}
          width={width * 0.2}
          height={height * 0.2}
        />
        <br></br>
        <Link href={`/artPieces/${slug}`}>Show me more!</Link>
      </li>
    </>
  );
}
