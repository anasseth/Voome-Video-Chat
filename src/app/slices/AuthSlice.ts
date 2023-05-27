import { createSlice } from "@reduxjs/toolkit"

export interface authInitialState {
    userInformation: {
        uid: string;
        name: string;
        email: string;
    } |
    undefined;
};

const initialState: authInitialState = {
    userInformation: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInformation: (state, action) => {
            state.userInformation = action.payload;
        }
    }
});

export const { setUserInformation } = authSlice.actions;