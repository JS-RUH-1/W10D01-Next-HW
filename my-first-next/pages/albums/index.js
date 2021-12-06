import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: { albums: data },
  };
};

const Albums = ({ albums }) => {

  return (
    <div className="container">
      <div className="row">
        <h1>All albums</h1>
        {albums.map((album) => (
          <Link href={"/albums/" + album.id} key={album.id}>
            <a>
              <h3>{album.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
