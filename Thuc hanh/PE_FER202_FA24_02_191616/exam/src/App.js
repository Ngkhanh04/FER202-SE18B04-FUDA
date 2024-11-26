import './App.css';
import MenuForm from './components/MenuForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobList from './components/JobList';
import DetailJob from './components/DetailJob';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <MenuForm />
        <Routes>
          <Route path='/' element={<JobList/>}/>
          <Route path="/detail-job/:jobId" element={<DetailJob />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>

    </div>
  );
}

export default App;
