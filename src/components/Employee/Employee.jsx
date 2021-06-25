import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Employee = props => {
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
        <h1>{employeeData.id}</h1>
    )
}

export default Employee;
