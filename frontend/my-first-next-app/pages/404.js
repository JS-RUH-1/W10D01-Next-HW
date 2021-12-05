import {useRouter} from 'next/router'
import { useEffect } from 'react';
import Link from "next/link"

const NotFound = () =>{

    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div>
           <h1>Oooops..</h1>
           <h2>That page cannot be found.</h2>
           <p>Go back to the <Link href = "/"><a>HomePage</a></Link></p>

        </div>


    )
}

export default NotFound;