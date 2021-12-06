import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios'


const Home = () => {
  const [allAlbums, setAllAlbums] = useState([])

  useEffect(() => {
    const getAllAlbums = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
      // console.log(res.data);
      setAllAlbums(res.data)
    }

    getAllAlbums()
  },[])

  
  return (
    <div className="albumsContainer">
      <h1>Here All Albums</h1>
      <div className="albums">
      {allAlbums.map((ele, index) => {
          return (
            <div className="ele" key={index}>
              <Link href={`/albums/${ele.id}`}>{ele.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Home;