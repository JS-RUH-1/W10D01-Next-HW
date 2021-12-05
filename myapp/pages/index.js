import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  return {
    props: { albums: data },
  };
};

export default function Home({ albums }) {
  return (
    <>
      <Head>
        <title>FirstNext | Home </title>
        <meta name="description" content="HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <h2>All the Albums:</h2>
        {albums.map((album) => {
          return (
            <Link href={"/" + album.id} key={album.id}>
              <a className={styles.single}>
                <h3>{album.title}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
