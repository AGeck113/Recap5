import Image from "next/image";
export default function Details({ activeSlug }) {
  return (
    <section>
      <h1>{activeSlug.name}</h1>
      <h2>{activeSlug.artist}</h2>
      <p>
        {activeSlug.year}, {activeSlug.genre}
      </p>
      <Image
        src={activeSlug.imageSource}
        alt={activeSlug.name}
        width={activeSlug.dimensions.width}
        height={activeSlug.dimensions.height}
      />
    </section>
  );
}
