import Image from "next/image";
export default function ArtPiecePreview({
  slug,
  name,
  imageSource,
  width,
  height,
  artist,
}) {
  return (
    <>
      <li key={slug}>
        <h2>{name}</h2>
        <p>{artist}</p>
        <Image src={imageSource} alt={name} width={width} height={height} />
      </li>
      ; ;
    </>
  );
}
