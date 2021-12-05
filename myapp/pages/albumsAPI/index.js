import styles from "../../styles/albumsAPI.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FirstNext | Albums </title>
        <meta name="description" content="HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className={styles.title}>Albums API Page</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, id diam commodo debitis his, eam putant
          patrioque quaerendum id. Ea adhuc insolens appellantur quo, duo id
          veri ullum, duo ea vidit malis atqui. Eos te sint omnes, ipsum
          euripidis cum eu, cu rebum liber maiestatis ius. Mei exerci
          appellantur ne, sit alienum dolores cu. Est epicuri facilisi ne, id
          sed civibus referrentur, ad qui aeterno impedit omittam. Te noluisse
          argumentum neglegentur nam, ea dolores oporteat vel, ne epicurei
          democritum adipiscing pri.
        </p>

        <p>
          Home page with all the albums displayed from this api
          https://jsonplaceholder.typicode.com/albums
        </p>
      </div>
    </div>
  );
}

// <Link href="/albumsAPI">
//           <a className={styles.btn}>Visit Albums</a>
//         </Link>
