import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Departments = props => {
    const [departmentsData, setDepartmentsData] = useState('');

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

    console.log(departmentsData);

    const departmentsList = departmentsData;
    const departmentsListMapped = departmentsList.map(department => {
        return <h1>{department.name}</h1>
    })

    return (
        <>
            <h1>test</h1>
            <div>{departmentsListMapped}</div>
        </>
    )
}

export default Departments;
