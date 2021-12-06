export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json()

    const paths = data.map(ninja=>{
        return{
            params:{id:ninja.id.toString() }
        }
    })
    return{
        paths,
        fallback:false
        }
}

export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/' + id);
    const data = await res.json()
    const res1 = await fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
    const data1 = await res1.json()
    return{

        props:{ albums: data,user:data1}
    }

}


const Details = ({albums , user}) => {
    return ( 
        <div>
            <h1>{albums.title}</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>

        </div>
    );
}
 
export default Details;