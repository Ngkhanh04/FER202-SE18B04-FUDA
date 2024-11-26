import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import Quiz from './store/Quiz';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;
