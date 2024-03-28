import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getVehicles = createAsyncThunk('vehicles/getVehicles', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

const initialState = {
    data: [
        { "vId": 1, "stsId": 1, "regNum": "ABC123", "type": "Truck", "capacity": 100, "costLoaded": 50, "costUnloaded": 30 },
        { "vId": 2, "stsId": 2, "regNum": "DEF456", "type": "Van", "capacity": 50, "costLoaded": 40, "costUnloaded": 25 },
        { "vId": 3, "stsId": 3, "regNum": "GHI789", "type": "Truck", "capacity": 150, "costLoaded": 60, "costUnloaded": 35 },
        { "vId": 4, "stsId": 4, "regNum": "JKL012", "type": "Van", "capacity": 70, "costLoaded": 45, "costUnloaded": 28 },
        { "vId": 5, "stsId": 5, "regNum": "MNO345", "type": "Truck", "capacity": 120, "costLoaded": 55, "costUnloaded": 32 },
        { "vId": 6, "stsId": 6, "regNum": "PQR678", "type": "Van", "capacity": 80, "costLoaded": 48, "costUnloaded": 27 },
        { "vId": 7, "stsId": 7, "regNum": "STU901", "type": "Truck", "capacity": 130, "costLoaded": 57, "costUnloaded": 33 },
        { "vId": 8, "stsId": 8, "regNum": "VWX234", "type": "Van", "capacity": 60, "costLoaded": 42, "costUnloaded": 26 },
        { "vId": 9, "stsId": 9, "regNum": "YZA567", "type": "Truck", "capacity": 140, "costLoaded": 58, "costUnloaded": 34 },
        { "vId": 10, "stsId": 10, "regNum": "BCD890", "type": "Van", "capacity": 90, "costLoaded": 50, "costUnloaded": 29 }
    ]
    ,
    loading: 'idle',
    error: null,
};
export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVehicles.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getVehicles.fulfilled, (state, action) => {
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getVehicles.rejected, (state, action) => {
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    },
})
export default vehiclesSlice.reducer