import { useAtom } from "jotai";
import { all } from "..";
import ArtPieces from "../../components/artPieces/index";

export default function ArtPiecesPage() {
  const [allPieces, updateAllPieces] = useAtom(all);

  console.log(allPieces);

  return <ArtPieces pieces={allPieces} />;
}
