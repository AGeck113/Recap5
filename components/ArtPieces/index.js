import { atom, useAtom } from "jotai";
import Image from "next/image";
import useSWR from "swr";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <h2>{piece.name}</h2>
            <p>{piece.artist}</p>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
            />
          </li>
        );
      })}
    </ul>
  );
}
