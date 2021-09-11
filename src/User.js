import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'

const User = ({match}) =>  {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const getInfo = axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.username}`)
                                        .then(user => user.data)
                                        .then(response => setUser(response))
                                        .catch(error => console.log(error))
        return getInfo
    }, [])
    console.log(user)
    return (
        <div  className="user">
             <p>{user?.username}</p>
        </div>
    )
}

export default User