import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./Navbar.css";
import Home from "./Home";
import notHome from "./nothome";

const Navbar = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/notHome">Not Home</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notHome" component={notHome} />
            </Switch>
        </Router>
    );
  };
  
export default Navbar;
  