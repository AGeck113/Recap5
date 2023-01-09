import { useAtom } from "jotai";
import { all } from "../_app";
import ArtPieces from "../../components/artPieces/index";
import Navigation from "../../components/Navigation";

export default function ArtPiecesPage() {
  const [allPieces, updateAllPieces] = useAtom(all);

  return (
    <>
      <ArtPieces pieces={allPieces} />
    </>
  );
}
