import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Employee = props => {
    const params = useParams();
    const [employeeData, setEmployeeData] = useState([]);
    const employeeId = 1; //set this to what's passed from URL params, useparamhook

    useEffect(() => {
        (async () => {
            try {
                const { data: employeeData } = await axios.get(`/api/employees?id=${employeeId}`);
                setEmployeeData(employeeData[0]);
            } catch (err) {
                throw err;
            }
        })()
    }, [])

    return (
        <h1>employee test {employeeId}</h1>
    )
}

export default Employee;
