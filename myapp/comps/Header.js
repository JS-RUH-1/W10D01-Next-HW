import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image width={128} height={77} src="/Logo.png" alt="img" />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/AboutUs">
        <a>about</a>
      </Link>
      <Link href="/albumsAPI">
        <a>Albums</a>
      </Link>
    </nav>
  );
}
