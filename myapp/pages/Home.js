import Link from "next/link"
import React from "react"


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    console.log(data)
    return {props: {albums:data}}}


const HomePage=({albums})=> {

    return (
<div>
<ul>
        {albums.map((prop) =>(
           <li><Link href={'/'+prop.id}>{prop.title}</Link></li>
            
        )
       
        )}
        </ul>
    </div>
    )
}
  export default HomePage;