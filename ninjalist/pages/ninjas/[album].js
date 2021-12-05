export const getStaticPaths = async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json();


const paths = data.map(album =>{
   return{
    params:{id: album.id.toString()}
   }
     
})
return{
    paths,
    fallback:false
}
}


export const getStaticProps= async (context)=>{

    const id= context.params.id;
    const res =  await fetch('https://jsonplaceholder.typicode.com/albums/'+userId);
    const data = await res.json();

return{
props:{album:data}
}

}
const Albums = () => {
    return ( 
        <>
        
        </>
     );
}
 
export default Albums;