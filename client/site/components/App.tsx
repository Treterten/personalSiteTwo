import React from 'react';
import styles from '../styles/header.module.css';
import Landing from './Landing';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/aboutme">
                <p>Coming Soon</p>
            </Route>
            <Route path="/blog">
                <p>Coming Soon</p>
            </Route>
            <Route path="/projects">
                <p>Coming Soon</p>
            </Route>
            <Route path="/">
                <Landing />
            </Route>
        </Switch>
    </Router>
)

export default App;