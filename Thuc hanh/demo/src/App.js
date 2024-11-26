import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import CompaniesList from './Compoments/Redux/CompaniesList';
import store from './Compoments/Redux/store_companies';
function App() {
        return (
          <Provider store={store} >
            <CompaniesList />
          </Provider>

        );
    };

export default App;