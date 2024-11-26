import axios from 'axios';

const API_URL = 'http://localhost:5000/accounts';

export const fetchAccount = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addAccount = async (account) => {
  const response = await axios.post(API_URL, account);
  return response.data;
};

export const updateAccount = async (account) => {
  const response = await axios.put(`${API_URL}/${account.id}`, account);
  return response.data;
};

export const deleteAccount = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
