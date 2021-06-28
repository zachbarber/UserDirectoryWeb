import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Employee = props => {

    const history = useHistory();
    const [employeeData, setEmployeeData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/employees?id=${id}`);
                setEmployeeData(data[0]);
            } catch (err) {
                throw err;
            }
        })()
    }, [id])

    return (
        <>
            <p>{employeeData.name}</p>
            <h1>Id</h1>
            <p>{employeeData.id}</p>
            <h1>Role</h1>
            <p>{employeeData.role}</p>
            <h1>Phone Number</h1>
            <p>{employeeData.phoneNumber}</p>
            <h1>Email Address</h1>
            <p>{employeeData.emailAddress}</p>
            <h1>Supervisor</h1>
            <p>{employeeData.isSupervisor ? 'YES' : 'NO'}</p>
            <h1>Hire Date</h1>
            <p>{new Date(employeeData.hireDate).toLocaleDateString()}</p>
            <button onClick={() => history.push(`/EditEmployee/${employeeData.id}&isNew=false`)}>Edit</button>
            <button>Delete</button> 
        </>
    )
}

export default Employee;
