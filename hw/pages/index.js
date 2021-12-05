import Link from "next/link";

function Home({ albums }) {
  return (
    <div style={{ overflow: "scroll", height: 500 }}>
      <h4 style={{ color: "red" }}>Please scroll to see all title</h4>

      {albums.map((e) => (
        <div>
          <Link href={`/details/${e.id}`}>{e.title}</Link>
          <hr />
        </div>
      ))}
    </div>
  ); 
      }

      
  export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
  
    return {
      props: { albums: data },
    };
  };

  export default Home;
