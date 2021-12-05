import axios from "axios";
import { useRouter } from "next/router"

function Album({details, user}) {
    const router = useRouter();
    const { id } = router.query;
    if(!details || !user) return <div>loading ..</div>;
    return <div>

<div>
<h1 className="is-size-2 has-text-centered">{details.title}</h1>

<div class="box">
  <b className="is-size-4">User Details:</b>
  {Object.keys(user).map(key => {

      return <p><b>{key}:</b> {typeof user[key] !== "object" ? user[key] : Object.keys(user[key]).map(k => <p>{k}: {typeof user[key][k] !== "object" ? user[key][k] : Object.keys(user[key][k]).map(k2 => <small>{k2} ({user[key][k][k2]}) </small>)}</p>)} </p>;
  })}
</div>

</div>

    </div>
}
Album.getInitialProps = async ({query}) => {
    const details = (await axios.get(`https://jsonplaceholder.typicode.com/albums/${query.id}`)).data;
    const user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${details.userId}`)).data;

    return {
      details, user 
    }
}

export default Album