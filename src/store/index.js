import { createSlice, configureStore } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'UIAlert',
    initialState: { show: true },
    reducers:{
        showAlert(state){
            state.show = true;
        },
        closeAlert(state){
            state.show = false;
        },
    }
})
export const alertAction = alertSlice.actions;


const store = configureStore({
    reducer: { alert: alertSlice.reducer }
});

export default store;