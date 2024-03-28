import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSts = createAsyncThunk('sts/getSts', async () => {
    const response = await axios.get('http://localhost:5000/sts');
    return response.data;
});

export const postSts = createAsyncThunk('sts/postSts', async (userSts) => {
    console.log("res ", userSts);
    const response = await axios.post('http://localhost:5000/sts', userSts);

    return response.data;
});


const initialState = {
    data: [
        { "stsId": 1, "wardNum": 101, "capacity": 200, "coordinate": "40.7128° N, 74.0060° W", "managers": ["Manager1", "Manager2"] },
        { "stsId": 2, "wardNum": 102, "capacity": 250, "coordinate": "34.0522° N, 118.2437° W", "managers": ["Manager3", "Manager4"] },
        { "stsId": 3, "wardNum": 103, "capacity": 180, "coordinate": "41.8781° N, 87.6298° W", "managers": ["Manager5", "Manager6"] },
        { "stsId": 4, "wardNum": 104, "capacity": 220, "coordinate": "29.7604° N, 95.3698° W", "managers": ["Manager7", "Manager8"] },
        { "stsId": 5, "wardNum": 105, "capacity": 190, "coordinate": "33.4484° N, 112.0740° W", "managers": ["Manager9", "Manager10"] },
        { "stsId": 6, "wardNum": 106, "capacity": 210, "coordinate": "37.7749° N, 122.4194° W", "managers": ["Manager11", "Manager12"] },
        { "stsId": 7, "wardNum": 107, "capacity": 240, "coordinate": "32.7157° N, 117.1611° W", "managers": ["Manager13", "Manager14"] },
        { "stsId": 8, "wardNum": 108, "capacity": 230, "coordinate": "39.7392° N, 104.9903° W", "managers": ["Manager15", "Manager16"] },
        { "stsId": 9, "wardNum": 109, "capacity": 270, "coordinate": "45.5051° N, 122.6750° W", "managers": ["Manager17", "Manager18"] },
        { "stsId": 10, "wardNum": 110, "capacity": 260, "coordinate": "37.7749° N, 122.4194° W", "managers": ["Manager19", "Manager20"] }
    ],
    loading: 'idle',
    error: null,
};

export const stsSlice = createSlice({
    name: 'sts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSts.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                }
            })
            .addCase(getSts.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.data = action.payload;
                    state.loading = 'idle';
                }
            })
            .addCase(getSts.rejected, (state) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = 'Error occurred';
                }
            })
            .addCase(postSts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(postSts.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(postSts.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error occurred while adding sts';
            });
    },
});

export default stsSlice.reducer;
