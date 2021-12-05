import styles from '../styles/Home.module.css'
import Link from 'next/link'


  export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    console.log(data)
    return {
        props: {
            albums:data
      }
 }
}

const HomePage=({albums})=> {

    return (
    <div className="mapstyle">
        {albums.map((prop) =>
        <ul>
            <Link href={`/${prop.id}`}>
            <a>{prop.title}</a>
             </Link>
        </ul>
        )}
    </div>
    )
}

  export default HomePage; 