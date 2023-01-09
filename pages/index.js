import { atom, useAtom } from "jotai";
import Link from "next/link";
import useSWR from "swr";

export const all = atom([]);

export default function HomePage() {
  const [allPieces, updateAllPieces] = useAtom(all);

  // const [page, setPage] = useState("spot");
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  updateAllPieces(data);
  return (
    <>
      <h1>Art Attack!</h1>
      <Link href="/artPieces/">Art</Link>
    </>
  );
}
