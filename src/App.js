import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Test1 from './components/Test1/Test1';
import Test2 from './components/Test2/Test2';
import DepartmentsList from './components/DepartmentsList/DepartmentsList';
import Employee from './components/Employee/Employee';
import EmployeesList from './components/EmployeesList/EmployeesList';

const App = () => {

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/DepartmentsList" component={DepartmentsList} />
          <Route path="/Employee/:id" component={Employee} />
          <Route path="/EmployeesList" component={EmployeesList} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
