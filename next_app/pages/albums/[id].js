import axios from 'axios'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


const Details = () => {

    const router = useRouter()
    const {id} = router.query
    const [singleAlbums, setSingleAlbums] = useState({}) 
    const [user, setUser] = useState({}) 


    useEffect(() => {
        const getSingleAlbums = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums/' + id)
            const res2 = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
            // console.log(res);
            // console.log(res2);
            setSingleAlbums(res.data)
            setUser(res2.data)
        }

        getSingleAlbums()
    },[])


    return (
        <div className="singleInfo">
            <h1>Single Album</h1>
            <h3>Name is: <span>{user.username}</span></h3>
            <h4>Album is: <span>{singleAlbums.title}</span></h4>
        </div>
    );
}

export default Details;