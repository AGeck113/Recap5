import { useAtom } from "jotai";
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { all } from "../_app";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;

  const [allPieces] = useAtom(all);
  const activeSlug = allPieces.filter((piece) => {
    return slug === piece.slug;
  })[0];
  return <ArtPieceDetails activeSlug={activeSlug} />;
}
