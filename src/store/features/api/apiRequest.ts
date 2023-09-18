import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { utilContainer } from '../../../shared/constants/utilContainer';
import { utilFuncs } from '../../../utils/utils';

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
        const config = utilFuncs.getStorage(utilContainer.HEADER.AUTHORIZATION); 
        const res = await axios.get(`${utilContainer.baseUrl}contestant`, {});
        return res.data.data.result.rappers; 
    }
)

export const logOut = createAsyncThunk(
    'user/logout',
    async () => {        
        const headers = utilFuncs.setHeader();
        const res = await axios.post(`${utilContainer.baseUrl}user/logout`, {}, {headers});
        return res.data;
    }
)

export const vote = createAsyncThunk(
    'vote',
    async (data: any) => {        
        const headers = utilFuncs.setHeader();
        const res = await axios.post(`${utilContainer.baseUrl}vote`, data, {headers});
        return res.data;
    }
)

export const signUp = createAsyncThunk(
    'user/signup',
    async (data: any) => {        
        const res = await axios.post(`${utilContainer.baseUrl}user/signUp`, data);
        console.log(res.data.data.metadata);
        return res.data.data.metadata;
    }
)