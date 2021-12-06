export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
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

  return {
    props: { item: data },
  };
};

const Details = ({ item }) => {
  return (
    <div>
      <p>{item.id} </p>
      <h1>{item.title}</h1>
      <p>{item.userId}</p>
    </div>
  );
};

export default Details;
