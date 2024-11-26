import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AccountList from './accountList';

ReactDOM.render(
    <Provider store={store}>
        <AccountList />
    </Provider>,
    document.getElementById('root')
);
