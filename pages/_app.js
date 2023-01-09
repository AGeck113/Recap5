import { atom, useAtom } from "jotai";
import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
export const all = atom([]);
export default function App({ Component, pageProps }) {
  const [allPieces, updateAllPieces] = useAtom(all);

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher,
    {
      onSuccess: (data) => {
        updateAllPieces(
          data.map((piece) => {
            return { ...piece, isFavorite: false };
          })
        );
      },
    }
  );
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  console.log(allPieces);
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher: fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}
