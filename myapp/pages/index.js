import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
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
    <div>
      <Navbar />
      <h1>home page</h1>
      {albums.map((item) => (
        <div class="card">
          <div class="container">
            <h6>ID: {item.id}</h6>
            <h5>Title: {item.title}</h5>
            <p>UserID: {item.userId}</p>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
