import { createSlice } from "@reduxjs/toolkit";

const UserHandleSlice = createSlice({
    name: "userType",
    initialState: { userType: "" },
    reducers: {
        login: (state, action) => {
            const userType = action.payload;
            localStorage.setItem("userType", userType);
            state.userType = userType;
        },
        logout: (state) => {
            localStorage.removeItem("userType");
            state.userType = "";
        },
        loginReload: (state) => {
            const userType = localStorage.getItem("userType");
            if (userType) {
                state.userType = userType;
            }
        },
    }
});

export const { login, logout, loginReload } = UserHandleSlice.actions;

export default UserHandleSlice.reducer;
