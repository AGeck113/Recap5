import { useAtom } from "jotai";
import useLocalStorageState from "use-local-storage-state";
import { all } from "../../pages/_app";

export default function FavButton({ slug, isFavorite }) {
  const [allPieces, updateAllPieces] = useAtom(all);
  const [favorite, setFavorite] = useLocalStorageState("favorite", {
    defaultValue: [],
  });
  return (
    <button
      type="button"
      onClick={() => {
        setFavorite(
          allPieces.map((piece) => {
            return piece.slug === slug
              ? { ...piece, isFavorite: !piece.isFavorite }
              : piece;
          })
        );
      }}
    >
      {isFavorite ? "⭐️" : "✭"}
    </button>
  );
}
