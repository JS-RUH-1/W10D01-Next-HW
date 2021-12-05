
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await res.json();

    const paths = albums.map(prop => {
      return {
        params: { id: prop.id.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/' + id);
    const albums = await res.json();

    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + albums.userId);
    const users = await response.json();

    return {
      props: { 
          prop: albums,
          user:users }

    }
  }

  const Details = ({ prop, user }) => {
    return (
      <div className = {styles.detail}>
        <h3>Name: {user.name}</h3>
        <h3>UserName: {user.username}</h3>
        <h3>Title: {prop.title }</h3>
        <h3>Email: {user.email}</h3><br/><br/>

      </div>
    );
  }

  export default Details;