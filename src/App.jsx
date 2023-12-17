// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/authSlice';
import Login from './components/Login';
import Users from './components/Users';

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Router>
      <Route path="/" exact>
        {isLoggedIn ? <Redirect to="/users" /> : <Login />}
      </Route>
      <Route path="/users" exact>
        {isLoggedIn ? <Users /> : <Redirect to="/" />}
      </Route>
    </Router>
  );
};

export default App;
