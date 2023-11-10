
import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({})


    const { userId } = useParams()
    console.log(userId);

    useEffect(() => {
        fetch(`http://127.0.0.1:8001/users/${userId}`)
            .then(res => res.json())
            .then(user => setUser(user))
    }, [])

    console.log("in parent", user)



    return (
        <div>
            <h1>Edit User</h1>
            <UserForm userData={user} />

        </div>
    );
}

export default EditUser;
