import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import link from 'next/link'
import Link from 'next/link'
import {useState} from 'react'
import axios from 'axios';
// import { remove } from '../../Planets'
export default function Planets({posts}) {
    const [name , setName]= useState()
    const [number , setNumber]= useState()
    const [length , setLength]= useState()
    const [saveId , setSaveId]= useState()
    const [enableEdit , setEnableEdit]= useState(false)
    const [allPlanets , setAllPlanets]= useState(posts)

    const addPlanet=(e)=>{
        e.preventDefault()
        const obj = {PlanetName:name,NumberOfMoon:number,LengthOfDay:length};
        axios.post('http://localhost:3000/api/planets',obj)  
        .then((response)=>{
            console.log(response.data)
            setAllPlanets(response.data)
        })

    }


    const remove =(e,_id)=>{
      e.preventDefault()
        axios.delete(`http://localhost:3000/api/planets/${_id}`).then((response)=>{
          console.log(response.data)
          setAllPlanets(response.data.data)

        })
 
    }
    const ubdate =(e,post,_id)=>{
      e.preventDefault()
      setSaveId(post._id)
       setName(post.PlanetName)
       setNumber(post.NumberOfMoon)
      setLength(post.LengthOfDay)
      setEnableEdit(true)
     

    }
    const saveData =(e)=>{
      e.preventDefault()
      const obj = {PlanetName:name,NumberOfMoon:number,LengthOfDay:length};
      axios.patch(`http://localhost:3000/api/planets/${saveId}`,obj).then((response) =>{
        setAllPlanets(response.data.data)
      })
    }
    return (

<div>
      <ul>
        {allPlanets.map((post) => (
            <div>
      
         
          <Link href={'/api/planets/'+post._id}>
          <div>
          <a>{post.PlanetName}</a>
          <br/>
        
          <button onClick={(e)=>remove(e,post._id)}>delete</button> 
          <button onClick={(e)=>ubdate(e,post)}>ubdate</button> 
           </div>
              
          </Link>

          </div>

        ))}
    
     
      </ul>
      <form>
      <div className="input">
          <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="PlanetName"></input>
          <input value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder="PlanetNumber"></input>
          <input value={length} onChange={(e)=>{setLength(e.target.value)}} placeholder="PlanetLength"></input>
            </div>
          <br/>
<div className="bbuton">
          <button onClick={(e) =>addPlanet(e)}>Add</button>
          <button onClick={(e) =>saveData(e)}>save</button>
          </div>
      </form>
      </div>

    )
  }
  
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/planets')
    const posts = await res.json()
  console.log(posts.data)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts:posts.data,
      },
    }
  }