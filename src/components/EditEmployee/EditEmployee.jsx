import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = props => {

    const history = useHistory();
    const [employeeData, setEmployeeData] = useState([]);
    const { id, isNew } = useParams();
    const emailRegEx = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    const validateForm = submitEvent => {
        submitEvent.preventDefault();
        const errors = { hasErrors: false };
        const formChildren = [...submitEvent.target.children];
        formChildren.forEach(child => {
            if (child.id) {
                errors[`${child.id}`] = {};
                if ((child.id === 'name' || child.id === 'role') && child.value.length > 50) {
                    errors[`${child.id}`]['length'] = `${child.id} must be 50 characters or less.`;
                }
                if (child.id === 'name' && !child.value.match(/^[a-zA-Z\s]*$/)) {
                    errors[`${child.id}`]['format'] = 'name cannot contain numbers.';
                }
                if (child.id === 'phoneNumber' && (child.value.length !== 10 || !child.value.match(/^[0-9]*$/))) {
                    errors[`${child.id}`]['format'] = 'must be 10 numbers.';
                }
                if (child.id === 'emailAddress' && (child.value.length > 50 || !child.value.match(emailRegEx))) {
                    errors[`${child.id}`]['format'] = 'must be a valid email address of no more than 50 characters.';
                }
                if (Object.keys(errors[`${child.id}`]).length) {
                    errors.hasErrors = true;
                }
            }
        })
        if (errors.hasErrors === true) {

            return errors;
        } else {

            return {};
        }
    }

    const submitForm = submitEvent => {
        submitEvent.preventDefault();
        (async () => {
            const formErrors = validateForm(submitEvent);
            if (Object.keys(formErrors).length) {
                console.log(formErrors);
                console.log(Object.keys(formErrors).length);
            } else if (!Object.keys(formErrors).length) {
                console.log('no errors');
            }
        })()
        // (async () => {
        //     try {
        //         await axios.post(`/api/employees`, employeeData);
        //         history.push(`/api/Employee/${employeeData.id}&isNew=false`)
        //     } catch (err) {
        //         throw err;
        //     }
        // })()
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
        <form id='employeeForm' onSubmit={(e) => submitForm(e)}>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue={employeeData?.name} />
            <label htmlFor='role'>role</label>
            <input id='role' defaultValue={employeeData?.role} />
            <label htmlFor='phoneNumber'>phoneNumber</label>
            <input id='phoneNumber' defaultValue={employeeData?.phoneNumber} />
            <label htmlFor='emailAddress'>emailAddress</label>
            <input id='emailAddress' defaultValue={employeeData?.emailAddress} />
            <input type='submit' />
        </form>
    )
}

export default EditEmployee;
