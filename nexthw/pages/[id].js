import React from 'react'
import Link from "next/link"
import styles from "../styles/Home.module.css";


export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json();
    const paths = data.map((album)=>{
        return{
            params: {id: album.id.toString()},
        };
    });
    return {
       paths,
       fallback:false,
    };
};

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/'+id)
    const data = await res.json();
    console.log(data);

    const res2 = await fetch('https://jsonplaceholder.typicode.com/users/'+data.userId)
    const data2 = await res2.json();
    return {
        props:{album: data,
            user:data2
        
        },
    };
};

function AlbumDetails({album,user}) {
    return (
        <div class="card">
  <div class="card-header">
    Album Details
  </div>
  <div class="card-body center">
    <h5 class="card-title">Album Title : {album.title}</h5>
    <p class="card-text ">User Name : {user.name}</p>
  </div>
</div>
        
    )
}

export default AlbumDetails;
