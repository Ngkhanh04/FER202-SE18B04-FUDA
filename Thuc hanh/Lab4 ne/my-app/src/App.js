import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Cập nhật từ Switch sang Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadWithDelay } from './utils/loadWithDelay';
import AccountContextProvider from './context/AccountContext';

const LoginForm = lazy(()=> loadWithDelay(() => import('./components/LoginForm'),2000));
const AccountManagement = lazy(()=> loadWithDelay(() => import('./components/AccountManagement'),2000));

const App = () => {
  return (
    <Router>
      <AccountContextProvider>
        <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>  {/* Sử dụng Routes thay vì Switch */}
            <Route path="/" element={<LoginForm />} />  {/* Sử dụng element thay vì component */}
            <Route path="/accounts" element={<AccountManagement />} />  {/* Sử dụng element thay vì component */}
          </Routes>
          </Suspense>
        </div>
      </AccountContextProvider>
    </Router>
  );
};

export default App;
