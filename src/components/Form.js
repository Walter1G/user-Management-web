import React, { useState } from 'react';
import classes from './Form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import AllUsers from '../pages/AllUsers';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        username: '',
    });

    const navigate = useNavigate();

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(formData)
        }).then(res => console.log(res.json()))
            .then(() => {
                alert("User added successfully");
                navigate('/')
            });


    };

    return (
        <div className={classes.formcontainer}>
            <h2>User</h2>
            <form onSubmit={handleSubmit}>
                <div className={classes.formRow}>
                    <div className={classes.row}>
                        <div>
                            <label htmlFor="fname">First Name:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                value={formData.firstName}
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
                                value={formData.lastName}
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
                                value={formData.email}
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
                                value={formData.username}
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
                                value={formData.address}
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
                                value={formData.phoneNumber}
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
                    <button type="submit">SAVE</button>
                    <Link to="/"><button>Back to List</button></Link>
                </div>
            </form>
        </div>
    );
};

export default Form;