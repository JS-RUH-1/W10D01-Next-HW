import styles from "../styles/Home.module.css";
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  return {
    props: { albums: data },
  };
};
export default function Home({ albums }) {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <div class="list-group">
        {albums.map((album) => (
        <Link href={"/" + album.id}><a key={album.id}
            class="list-group-item list-group-item-action "
            aria-current="true">
            {album.title}
          </a>
          </Link>

        ))}
      </div>
    </div>
  );
}
