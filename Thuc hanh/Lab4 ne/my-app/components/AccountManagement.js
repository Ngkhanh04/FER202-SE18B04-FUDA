import React, { lazy, useContext, useState } from 'react';
import DeleteModal from './DeleteModal';
import { loadWithDelay } from '../utils/loadWithDelay';
import { AccountContext } from '../context/AccountContext';
import { deleteAccount, updateAccount } from '../services/AccountService';

const AccountList = lazy(()=> loadWithDelay(() => import('./AccountList'),2000));
const AccountForm = lazy(()=> loadWithDelay(() => import('./AccountForm'),2000));

const AccountManagement = () => {
  const { state, dispatch } = useContext(AccountContext);
  const [showModal, setShowModal] = useState(false);
  const [deleteAccountId, setDeleteAccountId] = useState(null);
  const [editingAccount, setEditingAccount] = useState(null); // Thêm trạng thái cho bệnh nhân đang chỉnh sửa

  const handleDelete = (id) => {
    setDeleteAccountId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    await deleteAccount(deleteAccountId);
    dispatch({ type: 'DELETE_ACCOUNT', payload: deleteAccountId });
    setShowModal(false);
  };

  const handleEdit = (account) => {
    setEditingAccount(account);
  };

  const handleSave = async (updatedAccount) => {
    const updated = await updateAccount(updatedAccount);
    dispatch({ type: 'EDIT_ACCOUNT', payload: updated });
    setEditingAccount(null);
  };

  return (
    <div className="account-management">
      <h2>Account Management</h2>
      <AccountForm onSave={handleSave} editingAccount={editingAccount}/>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <AccountList accounts={state.accounts} onDelete={handleDelete} onEdit={handleEdit} />
      )}
      <DeleteModal show={showModal} onHide={() => setShowModal(false)} onConfirm={confirmDelete} />
    </div>
  );
};

export default AccountManagement;
