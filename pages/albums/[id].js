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
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + context.params.id
  );
  const data = await res.json();

  const res2 = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + data.userId
  );
  const data2 = await res2.json();

  return {
    props: { album: data, user: data2 },
  };
};

const Details = ({ album, user }) => {
  return (
    <div>
      <h1>{album.title}</h1>
      <p>{user.name}</p>
    </div>
  );
};

export default Details;
