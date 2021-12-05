import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Album() {
    const router = useRouter();
    const { id } = router.query;
    const [details, setDetails] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        if(!id) return;

        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`).then((res) => {
            setDetails(res.data);
            axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`).then(res =>
            setUser(res.data));
        })
    },[id]);
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