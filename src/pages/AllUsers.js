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

    const handleDelete = (userId) => {
        // Send a DELETE request to the server
        fetch(`http://127.0.0.1:8001/users/${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log('User deleted successfully');
                    // Update the local state by removing the deleted user
                    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
                } else {
                    console.error('Failed to delete user');
                }
            })
            .catch(error => console.error('Error deleting user:', error));
    };





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
                                    <button className={classes.deletebutton} onClick={() => handleDelete(user.id)}>Delete</button>
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
