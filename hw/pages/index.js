import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const data = await res.json();

  return {
    props: { albums: data }
  }
}

const Home = ({ albums }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Albums</h1>
      {albums.map(album => (
        <Link href={'/albums/' + album.id} key={album.id}>
          <a>
            <h3>{ album.title }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Home;