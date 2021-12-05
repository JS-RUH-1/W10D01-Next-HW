// import { useParams } from "react-router-dom";
import Link from "next/link";
import styles from "../styles/details.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  const paths = data.map((album) => {
    return {
      params: { id: album.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
  const data = await res.json();
  const usersRes = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.userId
  );
  const userData = await usersRes.json();
  return {
    props: { album: data, user: userData },
  };
};

const Details = ({ album, user }) => {
  console.log(album);
  console.log(user);
  return (
    <div>
      <h1 className={styles.title}>Details Page</h1>

      <div>
        <h3>{album.title}</h3>
        <h2>User Info:</h2>
        <h6>{user.name}</h6>
        <h6>{user.phone}</h6>
        <Link href={user.website}>
          <a>{user.website}</a>
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default Details;
