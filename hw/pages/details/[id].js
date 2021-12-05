const Detaiels = ({ albums, user }) => {
  return (
    <div>
      <h2>User details</h2>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Phone :{user.phone}</h3>
      <hr />
      <h2>Album details</h2>
      <h3>Id: {albums.id}</h3>
      <h3>Title: {albums.title}</h3>
    </div>
  );
};

// the function name is fixed !
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  //store the id of all albums
  const paths = data.map((album) => {
    return {
      params: { id: album.id.toString() },
    };
  });

  return {
    paths,
    // switch to 404 page if the id is not exsit
    fallback: false,
  };
};
// the function name is fixed !
export const getStaticProps = async (context) => {
  // Get the id from params (URL) EX:WWW.EXAMPLE/5  ID IS 5
  const id = context.params.id;
  //Fetch data fro single album
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
  const data = await res.json();

  //Fetch data fro single user with user id from the album above --
  const userRes = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.userId
  );
  const userData = await userRes.json();

  return {
    props: { albums: data, user: userData },
  };
};

export default Detaiels;
