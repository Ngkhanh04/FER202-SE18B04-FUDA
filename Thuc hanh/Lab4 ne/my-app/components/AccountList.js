import React from 'react';
import { Table, Button } from 'react-bootstrap';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

const AccountList = ({ accounts = [], onDelete, onEdit }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Account ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <tr key={account.accountId}>
              <td>{account.accountId}</td>
              <td>{`${account.accountHolder.firstName} ${account.accountHolder.lastName}`}</td>
              <td>{formatDate(account.accountHolder.dateOfBirth)}</td>
              <td>{`${account.accountHolder.address.street}, ${account.accountHolder.address.city}, ${account.accountHolder.address.state} ${account.accountHolder.address.zipcode}`}</td>
              <td>{account.accountHolder.contact.email}</td>
              <td>{account.accountHolder.contact.phone}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(account)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => onDelete(account.id)}>Delete</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">No accounts available</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default AccountList;
