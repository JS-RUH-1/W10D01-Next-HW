import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  const paths = data.map((album) => {
    return {
      params: { id: album.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + id);
  const data = await res.json();
  console.log("data ", data);

  const userData = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.userId
  );
  const user = await userData.json();
  console.log(user);

  return {
    props: { album: data, user: user },
  };
};

const Details = ({ album, user }) => {
  return (
    <div className="container content">
      <div className="row">
          <div className="col">
        <h1>{album.title}</h1>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Website: {user.website}</h3>
        <h3>City: {user.address.city}</h3>
        <h3>Phone: {user.phone}</h3>
      </div>
      </div>
    </div>
    
  );
};

export default Details;
