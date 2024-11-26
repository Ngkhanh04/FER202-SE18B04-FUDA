import { configureStore, createSlice } from '@reduxjs/toolkit';
import companiesReducer from './CompaniesSlice';
const store = configureStore({
    reducer: {
        companies: companiesReducer
    }
});

export default store;