import axios from "axios";
import Link from "next/link";

export async function getStaticProps(context) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/albums");

  return {
    props: { albums: res.data }, // will be passed to the page component as props
  }
}


export default function Home({albums}) {

  return <div className="container mt-10 section is-small">
<div class="columns is-multiline">
{albums.map(album => <div class="column  is-one-quarter is-centered">
    <div class="card">
  <div class="card-content">
    <div class="content">
      {album.title}
    </div>
  </div>
  <footer class="card-footer">
    <Link href={`/albums/${album.id}`}><a href="#" class="card-footer-item">View</a></Link>
  </footer>
</div>

  </div>)}
</div>
      
    </div>;
  
}
