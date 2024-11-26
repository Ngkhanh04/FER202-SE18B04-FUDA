import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addAccount } from '../services/AccountService';
import { AccountContext } from '../context/AccountContext';

const AccountForm = ({ onSave, editingAccount }) => {
  const { dispatch } = useContext(AccountContext);
  const [account, setAccount] = useState({
    accountHolder: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      },
      contact: {
        email: '',
        phone: ''
      }
    }
  });

  useEffect(() => {
    if (editingAccount) {
      setAccount(editingAccount);
    }
  }, [editingAccount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingAccount) {
      onSave(account);
    } else {
      const newAccount = await addAccount(account);
      dispatch({ type: 'ADD_ACCOUNT', payload: newAccount });
    }
    setAccount({
      accountHolder: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: {
          street: '',
          city: '',
          state: '',
          zipcode: ''
        },
        contact: {
          email: '',
          phone: ''
        }
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.firstName}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: { ...account.accountHolder, firstName: e.target.value }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.lastName}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: { ...account.accountHolder, lastName: e.target.value }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          value={account.accountHolder.dateOfBirth}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: { ...account.accountHolder, dateOfBirth: e.target.value }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Street</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.address.street}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              address: { ...account.accountHolder.address, street: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.address.city}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              address: { ...account.accountHolder.address, city: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.address.state}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              address: { ...account.accountHolder.address, state: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.address.zipcode}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              address: { ...account.accountHolder.address, zipcode: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={account.accountHolder.contact.email}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              contact: { ...account.accountHolder.contact, email: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={account.accountHolder.contact.phone}
          onChange={(e) => setAccount({
            ...account,
            accountHolder: {
              ...account.accountHolder,
              contact: { ...account.accountHolder.contact, phone: e.target.value }
            }
          })}
          required
        />
      </Form.Group>
      <Button type="submit">{editingAccount ? 'Save' : 'Add Account'}</Button>
    </Form>
  );
};

export default AccountForm;
