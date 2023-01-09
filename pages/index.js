import { atom, useAtom } from "jotai";
import { useState } from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/index";

export default function HomePage() {
  // const [page, setPage] = useState("spot");
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  console.log(data);
  return (
    <>
      <h1>Art Attack!</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
