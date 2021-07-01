import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = props => {

    const history = useHistory();
    const [employeeData, setEmployeeData] = useState([]);
    const [hasFormErrors, setHasFormErrors] = useState(false);
    const { id, isNew } = useParams();
    const formErrors = { hasErrors: false };
    const emailRegEx = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    const validateForm = submitEvent => {
        const formChildren = [...submitEvent.target.children];
        formErrors.hasErrors = false;
        for (const error in formErrors) {
            if (error !== 'hasErrors') {
                formErrors[error].length = 0;
            }
        }
        formChildren.forEach(child => {
            if (child.id !== 'submitButton') {
                if ((child.id === 'name' || child.id === 'role') && child.value.length > 50) {
                    if (!formErrors[`${child.id}`]) {
                        formErrors[`${child.id}`] = [];
                    }
                    formErrors[`${child.id}`].push(`<span className='error' id='${child.id}LengthError'>${child.id} must be 50 characters or less.</span>`);
                }
                if (child.id === 'name' && !child.value.match(/^[a-zA-Z\s]*$/)) {
                    if (!formErrors[`${child.id}`]) {
                        formErrors[`${child.id}`] = [];
                    }
                    formErrors[`${child.id}`].push(`<span className='error' id='${child.id}LettersOnlyError'>${child.id} must only contain letters.</span>`);
                }
                if (child.id === 'phoneNumber' && (child.value.length !== 10 || !child.value.match(/^[0-9]*$/))) {
                    if (!formErrors[`${child.id}`]) {
                        formErrors[`${child.id}`] = [];
                    }
                    formErrors[`${child.id}`].push(`<span className='error' id='${child.id}NumbersOnlyLengthError'>${child.id} must be 10 numbers.</span>`);
                }
                if (child.id === 'emailAddress' && (child.value.length > 50 || !child.value.match(emailRegEx))) {
                    if (!formErrors[`${child.id}`]) {
                        formErrors[`${child.id}`] = [];
                    }
                    formErrors[`${child.id}`].push(`<span className='error' id='${child.id}EmailFormatError'>${child.id} must be a valid email address of no more than 50 characters.</span>`);
                }
                if (formErrors[`${child.id}`]) {
                    if (formErrors[`${child.id}`].length) {
                        formErrors.hasErrors = true;
                    }
                }
            }
        })
        if(formErrors.hasErrors === true) {
            setHasFormErrors(true);
        } else {
            setHasFormErrors(false);
        }

        return;
    }

    const submitForm = submitEvent => {
        submitEvent.preventDefault();
        validateForm(submitEvent);
        if (!hasFormErrors) {
            console.log(submitEvent);
            console.log('\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\n')
            console.log(formErrors);
            setEmployeeData(employeeData[`${submitEvent.target.id}`] = `${submitEvent.target.value}`)
            console.log(employeeData);
            // try {
            //     await axios.post(`/api/employees`, employeeData);
            //     history.push(`/api/Employee/${employeeData.id}&isNew=false`)
            // } catch (err) {
            //     throw err;
            // }
        } else {
            console.log('formErrors');
            formErrors.hasErrors = false;
        };
    }

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/employees?id=${id}`);
                setEmployeeData(data[0]);
            } catch (err) {
                throw err;
            }
        })();
    }, [id])

    return (
        <form id='employeeForm' onSubmit={(e) => submitForm(e)}>
            <label htmlFor='name'>Name</label>
            <input id='name' defaultValue={employeeData?.name} />
            {hasFormErrors && formErrors['name'] ? () => console.log(formErrors['name']) : null}
            <label htmlFor='role'>role</label>
            <input id='role' defaultValue={employeeData?.role} />
            {hasFormErrors && formErrors['role'] ? () => console.log(formErrors['role']) : null}
            <label htmlFor='phoneNumber'>phoneNumber</label>
            <input id='phoneNumber' defaultValue={employeeData?.phoneNumber} />
            {hasFormErrors && formErrors['phoneNumber'] ? () => console.log(formErrors['phoneNumber']) : null}
            <label htmlFor='emailAddress'>emailAddress</label>
            <input id='emailAddress' defaultValue={employeeData?.emailAddress} />
            {hasFormErrors && formErrors['emailAddress'] ? () => console.log(formErrors['emailAddress']) : null}
            <input id='submitButton' type='submit' />
        </form>
    )
}

export default EditEmployee;
