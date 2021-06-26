import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = props => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [employeeData, setEmployeeData] = useState([]);
    const { id, isNew } = useParams();
    const onSubmit = data => {
        // console.log(data);
    }

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/employees?id=${id}`);
                setEmployeeData(data[0]);
                control.defaultValuesRef = {name: data[0].name}

            } catch (err) {
                throw err;
            }
        })()
    }, [id])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>Name</label>
            {/* <input id='name'  {...register("nameRequired", { required: true })} defaultValue={employeeData?.name} /> */}
            <Controller
                name="firstName"
                control={control}
                defaultValue={() => console.log(employeeData.name)}
                render={({ field }) => <input {...field} />}
            />
            {errors.nameRequired && <span>Name is required</span>}
            <input type='submit' />
        </form>
    )
}

export default EditEmployee;
