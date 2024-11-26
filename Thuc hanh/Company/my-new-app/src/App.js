import './App.css';
import { Provider } from 'react-redux';
// Correct the import paths if "Compoments" is the right folder
import CompaniesList from './Redux/CompaniesList';
import store from './Redux/store_companies';

function App() {
    return (
      <Provider store={store}>
        <CompaniesList />
      </Provider>
    );
}

export default App;
