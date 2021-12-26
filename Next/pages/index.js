import Link from "next/link";

function Home({ albums }) {
  return (

<>

      {albums.map((e) => (
        <div>
          <Link href={`/details/${e.id}`}>{e.title}</Link>
          <hr />
        </div>
      ))}
      </>

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
