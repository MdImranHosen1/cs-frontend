import { configureStore } from '@reduxjs/toolkit'
import vehiclesReducer from './slices/vehiclesSlice'
import usersReducer from './slices/usersSlice'



export default configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        users: usersReducer,
    },
})