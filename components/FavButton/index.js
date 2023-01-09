import { useAtom } from "jotai";
import { all } from "../../pages/_app";

export default function FavButton({ isFavorite, slug }) {
  const [allPieces, updateAllPieces] = useAtom(all);

  return (
    <button
      type="button"
      onClick={() => {
        {
          updateAllPieces(
            allPieces.map((piece) => {
              return piece.slug === slug
                ? { ...piece, isFavorite: !piece.isFavorite }
                : piece;
            })
          );
        }
      }}
    >
      {isFavorite ? "⭐️" : "✭"}
    </button>
  );
}
