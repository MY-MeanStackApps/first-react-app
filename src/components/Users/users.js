import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './users.scss';
import userService from '../Form/services/userService';
import { useHistory } from 'react-router-dom';

const UserCard = ({ id, name, email }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/user/${id}`);
    };

    return (
        <div className="col-xs-12 col-sm-6 col-md-4" onClick={handleClick}>
            <div className="card">
                <div className="card-body text-center">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{email}</p>
                </div>
            </div>
        </div>
    );
};

const UsersComponent = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await userService.getAllUsers();
                setData(response.data);
            } catch (error) {
                console.error('Registration error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    };

    return (
        <div className="main">
            <header>
                <br />
                <h1>Live Records</h1>
                <br />
            </header>

            {isLoading ? (
                <p className='loader'>Loading...</p>
            ) : (
                <div className="container">
                    <div className="row">
                        {data.map((item, index) => (
                            <UserCard
                                key={index}
                                id={item._id}
                                name={toTitleCase(item.name)}
                                email={item.email}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersComponent;
