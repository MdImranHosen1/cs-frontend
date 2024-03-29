import { configureStore } from '@reduxjs/toolkit'
import vehiclesReducer from './slices/vehiclesSlice'
import usersReducer from './slices/usersSlice'
import stsReducer from './slices/stsSlice'
import userHandleReducer from './slices/userHandleSlice'
import  landfillReducer  from './slices/landfullSlice';



export default configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        users: usersReducer,
        sts: stsReducer,
        userType: userHandleReducer,
        landfill: landfillReducer,
    },
})