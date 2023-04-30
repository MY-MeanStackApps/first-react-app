import React, { useState } from 'react';
import userService from './services/userService';
import swalService from '../../shared/services/swalService';
import './form.scss';


const FormComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = { name, email, password };
            const response = await userService.registerUser(userData);
            console.log('User registered:', response);

            if (response.message === 'success') {
                // Reset input variables
                setName('');
                setEmail('');
                setPassword('');
                // Call the showTimedAlert function
                swalService.showTimedAlert('success', 3000, 'Registration Successful', 'User registered successfully');
            } else if (response.message === "already_exist") {
                // Call the showTimedAlert function
                swalService.showTimedAlert('error', 3000, 'Oops', 'Email Already Exist');
            }


            // Handle successful registration (e.g., show a message, redirect, etc.)
        } catch (error) {
            console.error('Registration error:', error);

            // Call the showTimedAlert function with an error message
            swalService.showTimedAlert(3000, 'Registration Failed', 'An error occurred during registration');

            // Handle errors (e.g., show an error message)
        }
    };


    return (
        <div className='main'>
            <header>
                <br />
                <h1>Live Records</h1>
                <br />
            </header>
            <div className="_container">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
