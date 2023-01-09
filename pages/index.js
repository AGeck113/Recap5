import { atom, useAtom } from "jotai";
import Link from "next/link";
import useSWR from "swr";
import Spotlight from "../components/Spotlight/Spotlight";
import { all } from "./_app";

export default function SpotLightPage() {
  // const [page, setPage] = useState("spot");
  const [allPieces, updateAllPieces] = useAtom(all);
  const randomPiece = allPieces[Math.floor(Math.random() * allPieces.length)];

  return (
    <>
      <h1>Art Attack!</h1>
      <Spotlight randomPiece={randomPiece} />
      <Link href="/artPieces/">Art</Link>
    </>
  );
}
