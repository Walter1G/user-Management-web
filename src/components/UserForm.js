import React, { useState, useEffect } from 'react';

function UserForm({ user, onSave, onCancel }) {
    const [formData, setFormData] = useState({ ...user });

    const isNewUser = !user.id; // Check if it's a new user or an existing one

    useEffect(() => {
        // If it's a new user, reset the form fields
        if (isNewUser) {
            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                email: '',
                username: '',
            });
        }
    }, [isNewUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div>
            <h2>{isNewUser ? 'Create User' : 'Edit User'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">{isNewUser ? 'Create' : 'Update'}</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default UserForm;