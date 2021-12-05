export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const album = await fetch('https://jsonplaceholder.typicode.com/albums/' + id);
    const data = await album.json();
    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
    const data2 = await user.json(); 

    return {
      props: { albums: data ,users:data2}
    }
  }
  
  const Details = ({ albums ,users}) => {
    return (
      <div >
        <h1>{ albums.title }</h1>
        <div className="card">
        <h3> <span>Name  :  </span>{ users.name }</h3>
        <h3><span>Username : </span> { users.username }</h3>
        <h3><span>Email :  </span>{ users.email }</h3>
        <h3><span>Address :  </span>{ users.address.city }</h3>
        </div>
        

      </div>
    );
  }
  
  export default Details;