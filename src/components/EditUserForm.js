import React, { useState, useEffect } from 'react';
import classes from './Form.module.css';
import { Link } from 'react-router-dom';

const EditUserForm = ({ user }) => {
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
        username: user.username,
    });

    useEffect(() => {

        setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            email: user.email,
            username: user.username,
        });
    }, [user]);

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with value:', formData);

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

                {/* Repeat the above pattern for other input fields */}

                <div className={classes.formRow}>
                    <button type="submit">SAVE</button>
                    <Link to="/">Back to List</Link>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;