import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import link from 'next/link'
import Link from 'next/link'


export default function Home({posts}) {
    return (
      <ul>
        {posts.map((post) => (
            <div>
          <li>{post.title}</li>
          <Link href={'/albums/'+post.id}> 
          <a className={styles.link}>more info</a>
          </Link>
          </div>
        ))}
    
     
      </ul>
    )
  }
  
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }