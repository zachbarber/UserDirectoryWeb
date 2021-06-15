import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Test1 from './components/Test1/Test1';
import Test2 from './components/Test2/Test2';
import Departments from './components/Departments/Departments';
import Employee from './components/Employee/Employee'

const App = () => {

  const [selectedDepartmentId, setSelectedDepartmentId] = useState(0);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);
  const [isNewEmployeeFlag, setIsNewEmployeeFlag] = useState(false);
  const [isNewDepartmentFlag, setIsNewDepartmentFlag] = useState(false);

  const departmentSelectHandler = (departmentId) => {
    setSelectedDepartmentId(departmentId);
  }

  const employeeSelectHandler = (employeeId) => {
    setSelectedEmployeeId(employeeId);
  }

  const isNewEmployeeHandler = (isNewEmployee) => {
    setIsNewEmployeeFlag(isNewEmployee);
  }

  const isNewDepartmentHandler = (isNewDepartment) => {
    setIsNewDepartmentFlag(isNewDepartment);
  }

  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
        {/* URL params go in path variable */}
          <Route exact path="/home" component={Home} />
          <Route path="/test1" component={Test1} />
          <Route path="/test2" component={Test2} />
          <Route path="/Departments" render={(props) => (<Departments
            selectedDepartmentId={selectedDepartmentId}
            isNewDepartmentFlag={isNewDepartmentFlag}
            isNewDepartmentHandler={isNewDepartmentHandler}
            departmentSelectHandler={departmentSelectHandler} />)}
          />
          <Route path="/Employee" render={(props) => (<Employee
            selectedEmployeeId={selectedEmployeeId}
            isNewEmployeeFlag={isNewEmployeeFlag}
            isNewEmployeeHandler={isNewEmployeeHandler}
            employeeSelectHandler={employeeSelectHandler} />)}
          />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
