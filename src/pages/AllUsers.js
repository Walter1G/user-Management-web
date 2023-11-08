import React from 'react';
const users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St, City, Country',
        phoneNumber: '123-456-7890',
        email: 'john.doe@example.com',
        username: 'johndoe123',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        address: '456 Elm St, Town, Country',
        phoneNumber: '987-654-3210',
        email: 'jane.smith@example.com',
        username: 'janesmith456',
    },
    {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        address: '789 Oak St, Village, Country',
        phoneNumber: '555-123-4567',
        email: 'alice.j@example.com',
        username: 'alicej88',
    },
    // Add more user objects as needed
];


const AllUsers = () => {
    return (
        <div>
            All users page
        </div>
    );
}

export default AllUsers;
