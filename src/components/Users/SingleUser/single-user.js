import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userService from '../../Form/services/userService';
import './single-user.scss';

const SingleUserComponent = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await userService.getUserById(id);
                setUser(response.data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <div className='_main'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='card'>
                        <h1 className='title'>{user.name}</h1>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleUserComponent;
