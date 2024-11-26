import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "../pages/About";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Policy from "../pages/Policy";
import Promo from '../pages/Promo';
import Register from '../pages/Register';
import Schedule from "../pages/Schedule";
import Sport from "../pages/Sport";
import Team from "../pages/Team";
import Field from "../pages/Field";
import "../App.css";
        
const NaviBar = ()=>{
    return(
    <Router>
        <div className="header">
            <span className="title">
                <h1 style={{
                margin:"20px 100px"
            }}>Tien Son Soccer Field</h1>
            </span>
            <Navbar>
                <Container>
                    <NavLink fill variant="tabs">
                <Link to="/" style={{
                    color:"#fff"
                }}>Home</Link>
            </NavLink>
            <NavDropdown title="About">
                <NavDropdown.Item fill variant="tabs">
                    <Link to="/about" style={{
                    color:"#000"
                }}>Tien Son Soccer Field</Link>
                </NavDropdown.Item>
                <NavDropdown.Item fill variant="tabs">
                    <Link to="/policy" style={{
                    color:"#000"
                }}>Policies</Link>
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Booking">
                <NavDropdown.Item fill variant="tabs">
                    <Link to="/field" style={{
                    color:"#000"
                }}>Field</Link>
                </NavDropdown.Item>
                <NavDropdown.Item fill variant="tabs">
                    <Link to="/team" style={{
                    color:"#000"
                }}>Team</Link>
                </NavDropdown.Item>
                <NavDropdown.Item fill variant="tabs">
                    <Link to="/sport" style={{
                    color:"#000"
                }}>Sport equipment</Link>
                </NavDropdown.Item>
            </NavDropdown>

            <NavLink fill variant="tabs">
                <Link to="/promo" style={{
                    color:"#fff"
                }}>Promotion</Link>
            </NavLink>
            <NavLink fill variant="tabs-right" >
                <Link to="/login" style={{
                    color:"#fff"
                }}>Login</Link>
            </NavLink>
            <NavLink fill variant="tabs-right" >
                <Link to="/register" style={{
                    color:"#fff",
                }}>Register</Link>
            </NavLink>
        </Container>
    </Navbar>
    </div>
    
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/policy" element={<Policy/>}></Route>
            <Route path="/field" element={<Field/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/sport" element={<Sport/>}></Route>
            <Route path="/schedule" element={<Schedule/>}></Route>
            <Route path="/promo" element={<Promo/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </Router>
    );
}

export default NaviBar;