import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { utilContainer } from '../../../shared/constants/utilContainer';

export const login = createAsyncThunk(
    'user/login',
    async (data: any) => {
        console.log(data);
        
        const res = await axios.post(`${utilContainer.baseUrl}user/login`, data);
        return res.data.data.metadata.user; 
    }
)