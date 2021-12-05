import {useRouter} from 'next/router'
import { useEffect } from 'react';
import Link from "next/link"
import styles from '../styles/Home.module.css'

const NotFound = () =>{

    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/Home');
        }, 3000)
    }, [])

    return (
        <div className = {styles.not}>
           <h1>Oooops..</h1>
           <h2>That page cannot be found.</h2>
           <p>Go back to the <Link href = "/Home"><a>Home</a></Link></p>
        </div>
    )
}

export default NotFound;