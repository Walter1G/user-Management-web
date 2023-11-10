import React from 'react';
import classes from './About.module.css'

const About = () => {
    return (
        <div>
            <div>About page</div>
            <div>
                <article className={classes.article}>
                    <div>
                        Implementing CRUD Operations <br />
                        1. Creating a User <br />
                        Implement the functionality to add a new user.
                        Validate user input before sending the data to the server. <br />
                        2. Reading User Data <br />
                        Fetch the list of users from the server.
                        Display the user data in the React components. <br />
                        3. Updating User Information <br />
                        Enable users to edit their details.
                        Implement the functionality to update user information on the server. <br />
                        4. Deleting a User <br />
                        Allow users to delete their accounts.
                        Implement the server-side logic to delete user data.
                    </div>
                </article>
            </div>
        </div>
    );
}

export default About;
