import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../DepartmentsList/DepartmentsList.css'

const DepartmentsList = props => {

    const history = useHistory();
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/departments`);
                setDepartments(data);
            } catch (err) {
                throw err;
            }
        })()
    }, [])
    const departmentsNameList = departments.map((department, index) => {
        3
        return <h1 className='departmentNameHeader' key={index} onClick={() => history.push(`/Department/${department.id}`)}>{department.name}</h1>
    })

    return (
        <>
            <div>{departmentsNameList}</div>
        </>
    )
}

export default DepartmentsList;