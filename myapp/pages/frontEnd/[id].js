export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/planets');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(planet => {
      return {
        params: { id: planet.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const planet = await fetch('http://localhost:3000/api/planets' + id);
    const data = await planet.json();
   

    return {
      props: { planet: data }
    }
  }