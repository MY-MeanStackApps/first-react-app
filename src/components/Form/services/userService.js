// src/services/userService.js
import axios from 'axios';
import Env from '../../../environment/env.development';

const apiBaseUrl = Env.API_BASE_URL;

const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${apiBaseUrl}/user/create`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${apiBaseUrl}/user`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/user/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default {
    registerUser,
    getAllUsers,
    getUserById
};
