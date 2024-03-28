import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLandfills = createAsyncThunk('landfills/getLandfills', async () => {
    const response = await axios.get('http://localhost:5000/landfills');
    return response.data;
});

export const postLandfill = createAsyncThunk('landfills/postLandfills', async (landfillData) => {
    console.log("res ", landfillData);
    const response = await axios.post('http://localhost:5000/landfills', landfillData);
    return response.data;
});


const initialState = {
    data: [
        { "lfId": 1, "capacity": 500, "coordinate": "40.7128° N, 74.0060° W", "operationTimespan": "Mon-Fri 8AM-6PM", "userId": 1 },
        { "lfId": 2, "capacity": 600, "coordinate": "34.0522° N, 118.2437° W", "operationTimespan": "Mon-Sat 7AM-5PM", "userId": 2 },
        { "lfId": 3, "capacity": 550, "coordinate": "41.8781° N, 87.6298° W", "operationTimespan": "Mon-Fri 9AM-7PM", "userId": 3 },
        { "lfId": 4, "capacity": 700, "coordinate": "29.7604° N, 95.3698° W", "operationTimespan": "Mon-Sat 8AM-6PM", "userId": 4 },
        { "lfId": 5, "capacity": 450, "coordinate": "33.4484° N, 112.0740° W", "operationTimespan": "Mon-Fri 8AM-6PM", "userId": 5 },
        { "lfId": 6, "capacity": 800, "coordinate": "37.7749° N, 122.4194° W", "operationTimespan": "Mon-Sat 7AM-5PM", "userId": 6 },
        { "lfId": 7, "capacity": 750, "coordinate": "32.7157° N, 117.1611° W", "operationTimespan": "Mon-Fri 9AM-7PM", "userId": 7 },
        { "lfId": 8, "capacity": 900, "coordinate": "39.7392° N, 104.9903° W", "operationTimespan": "Mon-Sat 8AM-6PM", "userId": 8 },
        { "lfId": 9, "capacity": 850, "coordinate": "45.5051° N, 122.6750° W", "operationTimespan": "Mon-Fri 8AM-6PM", "userId": 9 },
        { "lfId": 10, "capacity": 950, "coordinate": "37.7749° N, 122.4194° W", "operationTimespan": "Mon-Sat 7AM-5PM", "userId": 10 }
    ],
    loading: 'idle',
    error: null,
};

export const landfillsSlice = createSlice({
    name: 'landfills',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLandfills.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                }
            })
            .addCase(getLandfills.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.data = action.payload;
                    state.loading = 'idle';
                }
            })
            .addCase(getLandfills.rejected, (state) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle';
                    state.error = 'Error occurred';
                }
            })
            .addCase(postLandfill.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(postLandfill.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.loading = 'idle';
            })
            .addCase(postLandfill.rejected, (state) => {
                state.loading = 'idle';
                state.error = 'Error occurred while adding Landfills';
            });
    },
});

export default landfillsSlice.reducer;
