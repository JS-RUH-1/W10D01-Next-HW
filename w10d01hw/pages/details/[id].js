import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from "axios"
import styles from '../../styles/Details.module.css'


const Details = () => {
     const router = useRouter()
     const { id } = router.query
    const [user,setUser]=useState({
        id: -1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
            lat: "",
            lng: ""
          }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
      });

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
            setUser(res.data)
            console.log(res.data)
        }).catch((err)=>{console.log("error at fetching using axios:",err)})
    },[])
 

  return <div className={styles.card}>
      <p>User ID: {user.id}</p>
      <p>User name: {user.name}</p>
      <p>User username: {user.username}</p>
      <p>User email: {user.email}</p>
      <p>User address: 
          <ul>
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li>
              <li>Coordinates: </li>
              <ul>
                  <li>geo lat: {user.address.geo.lat}</li>
                  <li>geo lng: {user.address.geo.lng}</li>
              </ul>
        </ul>
    </p>
    <p>Phone: {user.phone}</p>
    <p>Website: {user.website}</p>
    <p>Company Details: 
        <ul>
            <li>name: {user.company.name}</li>
            <li>catchPhrase: {user.company.catchPhrase}</li>
            <li>bs: {user.company.bs}</li>
        </ul>
    </p>
      </div>
}

export default Details