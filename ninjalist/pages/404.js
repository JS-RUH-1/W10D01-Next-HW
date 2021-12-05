
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'


const NotFound = () => {
   
   const router =useRouter();
   useEffect(() =>{

        console.log('404')

        setTimeout(() =>{
//router.go(-1)===>back history الرجوع للوراء
//router.go(1)===> forwoard التقدم للامام
            
router.push('/')
//take me to the homepage
        },3000)
   },[])
   
   
    return ( 
        <>
        <div className="not-found">
          <h1>Oooops...</h1>  
          <h2>That page cannot be found.</h2>

          <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
        </>
     );
}
 
export default NotFound ;