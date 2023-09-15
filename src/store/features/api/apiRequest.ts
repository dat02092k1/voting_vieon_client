import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { utilContainer } from '../../../shared/constants/utilContainer';

export const login = createAsyncThunk(
    'user/login',
    async (data: any) => {        
        const res = await axios.post(`${utilContainer.baseUrl}user/login`, data);
        return res.data.data.metadata; 
    }
)

export const getRappers = createAsyncThunk(
    'rapper/get',
    async () => {        
        const res = await axios.get(`${utilContainer.baseUrl}contestant`);
        return res.data.data.rappers; 
    }
)
