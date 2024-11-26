import React, { createContext, useReducer, useEffect } from 'react';
import {  initialState, AccountReducer } from '../reducers/AccountReducer';
import { fetchAccount} from '../services/AccountService';

export const AccountContext = createContext();

const AccountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AccountReducer, initialState);

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const accounts = await fetchAccount();
        dispatch({ type: 'FETCH_SUCCESS', payload: accounts });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };

    getAccounts();
  }, []);

  return (
    <AccountContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
