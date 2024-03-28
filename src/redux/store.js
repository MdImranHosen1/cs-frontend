import { configureStore } from '@reduxjs/toolkit'
import vehiclesReducer from './slices/vehiclesSlice'
import usersReducer from './slices/usersSlice'
import stsReducer from './slices/stsSlice'



export default configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        users: usersReducer,
        sts: stsReducer,
    },
})