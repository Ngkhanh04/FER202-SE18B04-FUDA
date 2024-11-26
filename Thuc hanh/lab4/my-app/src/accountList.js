import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAccounts, createAccount, updateAccount, deleteAccount } from './redux/accountSlice';

const AccountList = () => {
    const dispatch = useDispatch();
    const accounts = useSelector(state => state.accounts.accounts);
    const accountStatus = useSelector(state => state.accounts.status);

    useEffect(() => {
        if (accountStatus === 'idle') {
            dispatch(fetchAccounts());
        }
    }, [accountStatus, dispatch]);

    const handleCreate = () => {
        const newAccount = {
            accountId: "ACC67892",
            accountHolder: {
                firstName: "Alice",
                lastName: "Brown",
                dateOfBirth: "1995-05-05",
                address: {
                    street: "101 Oak St",
                    city: "Cityville",
                    state: "Stateville",
                    zipcode: "12345"
                },
                contact: {
                    email: "alice.brown@example.com",
                    phone: "+1234567890"
                }
            }
        };
        dispatch(createAccount(newAccount));
    };

    const handleUpdate = (account) => {
        const updatedAccount = {
            ...account,
            accountHolder: { ...account.accountHolder, firstName: 'Updated' }
        };
        dispatch(updateAccount(updatedAccount));
    };

    const handleDelete = (accountId) => {
        dispatch(deleteAccount(accountId));
    };

    return (
        <div>
            <h1>Accounts</h1>
            <button onClick={handleCreate}>Create Account</button>
            <ul>
                {accounts.map(account => (
                    <li key={account.accountId}>
                        {account.accountHolder.firstName} {account.accountHolder.lastName}
                        <button onClick={() => handleUpdate(account)}>Update</button>
                        <button onClick={() => handleDelete(account.accountId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountList;
