import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
 


export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  
  const data = await res.json();
  
  
  return {
      props:{albums:data}
  }
  
  }

export default function Home({albums}) {
  return (
    <>
    <Head>
      <title> Ninja | Home</title>
      <meta name="keywords" ninjas=""/>
    </Head>
      <div> 
        
      <h1 className={styles.title}>Homepage</h1>

        {albums.map(album =>(

        <Link href={'/ninjas/'+album.userId} key={album.id}> 
        <a> 
        <p className={styles.text}>{album.id}-{album.title}</p>
        </a>
        </Link>
        ))}

      
       <Link href='/ninjas'>
       <a className={styles.btn}>see Ninja Listing</a></Link>
       
         
      </div>
    </>
  )
}
