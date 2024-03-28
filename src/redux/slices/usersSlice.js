import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

export const postUser = createAsyncThunk('users/postUser', async (userData) => {
    const response = await axios.post('YOUR_BACKEND_ENDPOINT', userData);
    return response.data;
});

const initialState = {
    data: [
        { "userId": 1, "userType": "Type1", "userName": "user1", "userPassword": "pass123", "userRoles": ["role1", "role2"], "userPhone": "1234567890", "userEmail": "user1@example.com" },
        { "userId": 2, "userType": "Type2", "userName": "user2", "userPassword": "pass456", "userRoles": ["role2", "role3"], "userPhone": "2345678901", "userEmail": "user2@example.com" },
        { "userId": 3, "userType": "Type3", "userName": "user3", "userPassword": "pass789", "userRoles": ["role3", "role4"], "userPhone": "3456789012", "userEmail": "user3@example.com" },
        { "userId": 4, "userType": "Type4", "userName": "user4", "userPassword": "passabc", "userRoles": ["role4", "role5"], "userPhone": "4567890123", "userEmail": "user4@example.com" },
        { "userId": 5, "userType": "Type5", "userName": "user5", "userPassword": "passxyz", "userRoles": ["role5", "role6"], "userPhone": "5678901234", "userEmail": "user5@example.com" },
        { "userId": 6, "userType": "Type6", "userName": "user6", "userPassword": "pass123", "userRoles": ["role6", "role7"], "userPhone": "6789012345", "userEmail": "user6@example.com" },
        { "userId": 7, "userType": "Type7", "userName": "user7", "userPassword": "pass456", "userRoles": ["role7", "role8"], "userPhone": "7890123456", "userEmail": "user7@example.com" },
        { "userId": 8, "userType": "Type8", "userName": "user8", "userPassword": "pass789", "userRoles": ["role8", "role9"], "userPhone": "8901234567", "userEmail": "user8@example.com" },
        { "userId": 9, "userType": "Type9", "userName": "user9", "userPassword": "passabc", "userRoles": ["role9", "role10"], "userPhone": "9012345678", "userEmail": "user9@example.com" },
        { "userId": 10, "userType": "Type10", "userName": "user10", "userPassword": "passxyz", "userRoles": ["role10", "role11"], "userPhone": "0123456789", "userEmail": "user10@example.com" }
    ]
    ,
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
                state.data.push(action.payload); // Assuming the response contains the newly added user data
                state.loading = 'idle';
            })
            .addCase(postUser.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error occurred while adding user';
            });
    },
});

export default usersSlice.reducer;
