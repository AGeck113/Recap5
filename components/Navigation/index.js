import Link from "next/link";
import { page } from "../../pages/_app";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Spotlight</Link>
      <br></br>
      <Link href="/artPieces/">Art Pieces</Link>
    </nav>
  );
}
