import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Navbar from './Navbar';
import About from './About';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/aboutme">
        <About />
      </Route>
      <Route path="/blog">
        <p />
      </Route>
      <Route path="/projects">
        <p />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>
);

export default App;
