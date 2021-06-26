import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../EmployeesList/EmployeesList.css'

const EmployeesList = props => {

    const history = useHistory();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/employees`);
                setEmployees(data);
            } catch (err) {
                throw err;
            }
        })()
    }, [])
    const employeesNameList = employees.map((employee, index) => {

        return <h1 className='employeeNameHeader' key={index} onClick={() => history.push(`/Employee/${employee.id}&isNew=false`)}>{employee.name}</h1>
    })

    return (
        <>
            <div>{employeesNameList}</div>
        </>
    )
}

export default EmployeesList;
