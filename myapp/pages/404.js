
import {useRouter} from "next/router"
import {useEffect} from "react"
import Link from "next/link"

function NotFound() {
    const router = useRouter();

    useEffect(() => {

        //تحسب لي 
        setTimeout(() =>{
            router.push('/Home')


        }, 3000)
    
    }, [])

    return (
        <div>
        <h1>OOOOOOOPS</h1>
        <p>go to back <Link href = "/Home"><a>Home</a></Link></p>
            
        </div>
    )
}

export default NotFound
