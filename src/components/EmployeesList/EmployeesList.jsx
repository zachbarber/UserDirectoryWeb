import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../EmployeesList/EmployeesList.css'

const EmployeesList = props => {
    const [employees, setEmployees] = useState([]);
    const { employeeSelectHandler } = props;

    useEffect(() => {
        (async () => {
            try {
                const { data: employeesData } = await axios.get(`/api/employees`);
                setEmployees(employeesData);
            } catch (err) {
                throw err;
            }
        })()
    }, [])
    const employeesNameList = employees.map((employee, index) => {

        return <h1 key={index} onClick={() => employeeSelectHandler(employee.id)}>{employee.name}</h1>
    })

    return (
        <>
            <div>{employeesNameList}</div>
        </>
    )
}

export default EmployeesList;
