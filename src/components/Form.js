import React, { useState } from 'react';
import classes from './Form.module.css'


const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send the input value to the server)
        console.log('Form submitted with value:', inputValue);
    };


    return (
        <div className={classes.formcontainer}>
            <h2>User</h2>
            <form onSubmit={handleSubmit} >
                <div className={classes.formRow}>
                    <div className={classes.row} >
                        <div>
                            <label htmlFor='fname'>
                                First Name:
                            </label></div>
                        <div>
                            <input
                                type="text"
                                name='fname'
                                id='fname'
                                value={inputValue}
                                onChange={handleChange}
                                placeholder="First Name"
                            />
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div>
                            <label htmlFor='lname'>
                                Last Name:
                            </label>
                        </div>
                        <div>
                            <input
                                id='lname'
                                type="text"
                                value={inputValue}
                                name='lname'
                                onChange={handleChange}
                                placeholder="Last Name"
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
                                value={inputValue}
                                onChange={handleChange}
                                placeholder="jondoe@mail.com"
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
                                value={inputValue}
                                name='uname'
                                onChange={handleChange}
                                placeholder="@Username"
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
                                value={inputValue}
                                onChange={handleChange}
                                placeholder="44 Park av "
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
                                value={inputValue}
                                name='phone'
                                id='phone'
                                onChange={handleChange}
                                placeholder="0712345678"
                            />
                        </div>
                    </div>

                </div>


                <div className={classes.formRow}>
                    <button type="submit">SAVE</button>
                    <button>Back to List</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
