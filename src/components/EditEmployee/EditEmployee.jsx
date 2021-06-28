import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = props => {

    const history = useHistory();
    const [employeeData, setEmployeeData] = useState([]);
    const { id, isNew } = useParams();

    const validateForm = submitEvent => {
        submitEvent.preventDefault();
        const formErrors = [];
        const formChildren = [...submitEvent.target.children];
        formChildren.forEach(child => {
            if(child.id === 'name' || child.id === 'role') {
                if(child.value.length > 50) {
                    formErrors.push({ field: child.id, error: `must be 50 characters in length or shorter.` });
                }
                if (!child.value.match(/^[a-zA-Z\s]*$/)) {
                    formErrors.push({ field: child.id, error: `must only contain letters.` });
                }
            }
            if(child.id === 'phoneNumber') {
                if (child.value.length !== 10 || !child.value.match(/^[0-9]*$/)) {
                    formErrors.push({ field: child.id, error: 'must be 10 numbers.'} );
                }
            }
            if(child.id === 'emailAddress') {
                if (child.value.length > 50 || !child.value.match(/c/)) {
                    formErrors.push({ field: child.id, error: 'must be a valid email address of no more than 50 characters.' });
                }
            }
        })
        console.log(formErrors);
    }

    const submitForm = submitEvent => {
        submitEvent.preventDefault();
            (async () => {
                try {
                    await axios.post(`/api/employees`, employeeData);
                    history.push(`/api/Employee/${employeeData.id}&isNew=false`)
                } catch (err) {
                    throw err;
                }
            })()
        }

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
        <form id='employeeForm' onSubmit={(e) => validateForm(e)}>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue={employeeData?.name} />
            <input type='submit' />
        </form>
    )
}
        
export default EditEmployee;
