import { configureStore } from '@reduxjs/toolkit'
import vehiclesReducer from './slices/vehiclesSlice'


export default configureStore({
    reducer: {
        vehicles: vehiclesReducer,
    },
})