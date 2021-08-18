import { createSlice, configureStore } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'UIAlert',
    initialState: { show: false },
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