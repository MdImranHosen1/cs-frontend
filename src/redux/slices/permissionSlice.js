import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPermissions = createAsyncThunk('rbac/permissions/getPermissions', async () => {
    const response = await axios.get('http://localhost:5000/rbac/permissions');
    return response.data;
});

export const postPermission = createAsyncThunk('rbac/permissions/postPermissions', async (permission) => {
    // console.log("res ", userData);
    const response = await axios.post('http://localhost:5000/rbac/permissions', permission);

    return response.data;
});


const initialState = {
    data: [ ],
    loading: 'idle',
    error: null,
};

export const permissionsSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPermissions.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                }
            })
            .addCase(getPermissions.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.data = action.payload;
                    state.loading = 'idle';
                }
            })
            .addCase(getPermissions.rejected, (state) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = 'Error occurred';
                }
            })
            .addCase(postPermission.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(postPermission.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(postPermission.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error occurred while adding Permission';
            });
    },
});

export default permissionsSlice.reducer;
