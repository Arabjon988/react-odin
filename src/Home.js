import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Home() {
    const [user, setUser] = useState([])

useEffect(() => {
  const getInfo = axios.get("https://jsonplaceholder.typicode.com/users")
    .then(user => user.data)
    .then(res => setUser(res))
    .catch(err => alert(err))
  return getInfo
}, [])

console.log(user)
    return (
        <div>
        {
          user?.map(u => (
            <Link to={`/${u.id}`} key={u.id}><p>{u.username}</p></Link>
          ))
        }
        </div>
    )
}

export default Home
