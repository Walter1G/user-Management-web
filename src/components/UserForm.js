import React, { useState, useEffect } from 'react';
import classes from './Form.module.css'
import { Link, useNavigate } from 'react-router-dom';


function UserForm({ userData }) {
    const [user, setUser] = useState(userData);
    const navigate = useNavigate();
    console.log("child", user)



    useEffect(() => {
        setUser(userData);
    }, [userData]);



    const handleChange = (e, fieldName) => {

        setUser({
            ...user,
            [fieldName]: e.target.value,
        });
    };

    const handleUpdate = () => {

        fetch(`http://127.0.0.1:8001/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (response.ok) {
                    console.log('User updated successfully');


                } else {
                    console.error('Failed to update user');
                }
            })
            .catch(error => console.error('Error updating user:', error));


    };

    return (
        <div className={classes.formcontainer}>
            <h2>{user.firstName}</h2>

            <form onSubmit={handleUpdate}>
                <div className={classes.formRow}>
                    <div className={classes.row}>
                        <div>
                            <label htmlFor="fname">First Name:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                id="fname"
                                value={user.firstName}
                                onChange={(e) => handleChange(e, 'firstName')}
                                placeholder="First Name"
                                required
                            />
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div>
                            <label htmlFor="lname">Last Name:</label>
                        </div>
                        <div>
                            <input
                                id="lname"
                                type="text"
                                value={user.lastName}
                                name="lname"
                                onChange={(e) => handleChange(e, 'lastName')}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                    </div>


                </div>
                <div className={classes.formRow}>
                    <div className={classes.row} >
                        <div>
                            <label htmlFor='email'>
                                Email:
                            </label></div>
                        <div>
                            <input
                                id='email'
                                type="text"
                                name='email'
                                value={user.email}
                                onChange={(e) => handleChange(e, 'email')}
                                placeholder="jondoe@mail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div>
                            <label htmlFor='uname'>
                                UserName:
                            </label>
                        </div>
                        <div>
                            <input
                                id='uname'
                                type="text"
                                value={user.username}
                                name='uname'
                                onChange={(e) => handleChange(e, 'username')}
                                placeholder="@Username"
                                required
                            />
                        </div>
                    </div>

                </div>

                <div className={classes.formRow}>
                    <div className={classes.row} >
                        <div>
                            <label htmlFor='address'>
                                Address:
                            </label></div>
                        <div>
                            <input
                                type="text"
                                name='address'
                                id='address'
                                value={user.address}
                                onChange={(e) => handleChange(e, 'address')}
                                placeholder="44 Park av "
                                required
                            />
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div>
                            <label htmlFor='phone'>
                                Phone Number:
                            </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={user.phoneNumber}
                                name='phone'
                                id='phone'
                                onChange={(e) => handleChange(e, 'phoneNumber')}
                                placeholder="0712345678"
                                required
                            />
                        </div>
                    </div>

                </div>



                <div className={classes.formRow}>
                    <button type="submit">UPDATE</button>
                    <Link to="/"><button>CANCEL</button></Link>
                </div>
            </form>
        </div>
    );
}

export default UserForm;