import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/accounts';

// Thunks for async CRUD operations
export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const createAccount = createAsyncThunk('accounts/createAccount', async (newAccount) => {
    const response = await axios.post(API_URL, newAccount);
    return response.data;
});

export const updateAccount = createAsyncThunk('accounts/updateAccount', async (account) => {
    const response = await axios.put(`${API_URL}/${account.accountId}`, account);
    return response.data;
});

export const deleteAccount = createAsyncThunk('accounts/deleteAccount', async (accountId) => {
    await axios.delete(`${API_URL}/${accountId}`);
    return accountId;
});

// Account slice (state + reducers)
const accountSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAccounts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.accounts = action.payload;
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.accounts.push(action.payload);
            })
            .addCase(updateAccount.fulfilled, (state, action) => {
                const updatedAccount = action.payload;
                const existingAccountIndex = state.accounts.findIndex(a => a.accountId === updatedAccount.accountId);
                state.accounts[existingAccountIndex] = updatedAccount;
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                state.accounts = state.accounts.filter(account => account.accountId !== action.payload);
            });
    }
});

export default accountSlice.reducer;
