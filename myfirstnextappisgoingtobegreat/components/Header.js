import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
       <header>
           <div className={styles.header}>
               <Link href="/"><a>Home</a></Link><br/>
               <Link href="/about"><a>About</a></Link><br/>
               <Link href="/albums"><a>Albums List</a></Link>
           </div>
       </header>
    )
}
