import React, { useEffect, useState } from 'react';
import classes from './AllUsers.module.css'
import UserForm from '../components/UserForm';
import { Link, Route } from 'react-router-dom';



const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8001/users")
            .then(response => response.json())
            .then(usersdata => setUsers(usersdata))
    }, [])


    const [editUser, setEditUser] = useState(null);

    const handleEdit = (user) => {
        setEditUser(user);
    };

    const handleCancelEdit = () => {
        setEditUser(null);
    };

    console.log(users)

    users.map(user => console.log(user))



    return (
        <div>
            <div className={classes.title}>
                All users
            </div>
            <div className={classes.tablecontainer}>
                <table className={classes.usertable}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.address}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`}>
                                        <button className={classes.editbutton}>Edit</button>
                                    </Link>
                                    <button className={classes.deletebutton} onClick={() => console.log(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default AllUsers;
