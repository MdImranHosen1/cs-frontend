import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const getToken = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    return userDetails ? userDetails.token : null;
};

axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('http://localhost:5000/users');
    return response.data;
});

export const postUser = createAsyncThunk('users/postUser', async (userData) => {
    const response = await axios.post('http://localhost:5000/users', userData);
    return response.data;
});

const initialState = {
    data: [],
    loading: 'idle',
    error: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                }
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.data = action.payload;
                    state.loading = 'idle';
                }
            })
            .addCase(getUsers.rejected, (state) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = 'Error occurred';
                }
            })
            .addCase(postUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(postUser.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(postUser.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error occurred while adding user';
            });
    },
});

export default usersSlice.reducer;
