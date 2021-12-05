import Link from 'next/link'
import styles from '../../styles/Layout.module.css'


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/')
    const data = await res.json()

    return{
        props: {albums: data}
    }
}

const Albums = ({albums})=> {
    return(
        <div className={styles.album}>
            <h1>all albums</h1>
            <ol>
            {albums.map(e =>(
                <Link href={'/albums/'+ e.id} key={e.id}>
                   <li> 
                   <a>
                        <h3>
                            {e.title}
                        </h3>
                    </a>
                    </li>
                </Link>
            ))
            }
            </ol>
        </div>
    )
}
export default Albums