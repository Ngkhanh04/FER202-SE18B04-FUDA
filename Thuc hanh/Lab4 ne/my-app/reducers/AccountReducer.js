  export const initialState = {
      accounts: [],
      loading: true,
      error: ''
    };
  
  export const AccountReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          loading: false,
          accounts: action.payload,
          error: ''
        };
      case 'FETCH_ERROR':
        return {
          loading: false,
          accounts: [],
          error: 'Something went wrong!'
        };
      case 'ADD_ACCOUNT':
        return {
          ...state,
          accounts: [...state.accounts, action.payload]
        };
      case 'EDIT_ACCOUNT':
        return {
          ...state,
          accounts: state.accounts.map(account =>
            account.id === action.payload.id ? action.payload : account
          )
        };
      case 'DELETE_ACCOUNT':
        return {
          ...state,
          accounts: state.accounts.filter(account => account.id !== action.payload)
        };
      default:
        return state;
    }
  };
  