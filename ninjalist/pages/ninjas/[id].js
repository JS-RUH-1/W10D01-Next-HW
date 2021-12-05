
import styles from '../../styles/Ninjas.module.css'
export const getStaticPaths = async ()=>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();


const paths = data.map(ninja =>{
   return{
    params:{id: ninja.id.toString()}
   }
     
})

    return{
        paths,
        fallback:false
    }
}
    export const getStaticProps= async (context)=>{

        const id= context.params.id;
        const res =  await fetch('https://jsonplaceholder.typicode.com/users/'+id);
        const data = await res.json();

return{
    props:{ninja:data}
}

}


const Details = ({ninja}) => {
    return (<>
    
    <div>

        <h2> Name: <span className={styles.font}>{ninja.name}</span>   </h2> 

        <p>Email: <span className={styles.font}>{ninja.email}</span>  </p>
        <p>Website: <span className={styles.font}>{ninja.website}</span>  </p>
        <p>City: <span className={styles.font}>{ninja.address.city}</span> </p>
         
    </div>
    </>  );
}
 
export default Details;