import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';

const store = configureStore({
    reducer: {
        accounts: accountReducer
    }
});

export default store;
