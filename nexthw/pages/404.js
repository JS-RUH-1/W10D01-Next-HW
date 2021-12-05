import React, {useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Error() {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{router.push('/')},3000)
    },[])
    
    return (
        <div className="container">
            <h1>Page Not Found</h1>
            <Link href="/">
            <a className="btn btn-dark"> Go to Home Page</a>
            </Link>
        </div>
    )
}

export default Error
