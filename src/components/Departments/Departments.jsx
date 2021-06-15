import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Departments/Departments.css'

const Departments = props => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const { departmentSelectHandler } = props;

    useEffect(() => {
        (async () => {
            try {
                const { data: departmentsData } = await axios.get(`/api/departments`);
                setDepartmentsData(departmentsData);
            } catch (err) {
                throw err;
            }
        })()
    }, [])
    const departmentsList = departmentsData.map((department, index) => {
        
        return <h1 key={index} onClick={() => departmentSelectHandler(department.id)}>{department.name}</h1>
    })

    return (
        <>
            <div>{departmentsList}</div>
        </>
    )
}

export default Departments;
