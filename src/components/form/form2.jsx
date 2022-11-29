import React from 'react'
import { useForm } from "react-hook-form";

function Form2() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const onSub = (_bodyData) => {
        console.log(_bodyData);
    }
    return (
        <div className='d-flex justify-content-center mt-4 mb-4'>
            <form onSubmit={handleSubmit(onSub)} className='col-10 col-md-4 col-lg-5 shadow p-3 rounded-5 '>
                <h2>Sing up</h2>
                <label className='mt-2'>Name:</label>
                <input {...register('name', { required: true, minLength: 3, maxLength: 20 })} className='form-control' type="text" />
                {errors.name && <span className='d-block text-danger '>name invalid</span>}
                <label className='mt-2'>Emali:</label>
                <input {...register('email', { required: true, pattern: emailReg })} className='form-control' type="text" />
                {errors.email && <span className='d-block text-danger'>Email invalid</span>}
                <label className='mt-2'>Password:</label>
                <input {...register('password', { required: true })} className='form-control' type="text" />
                {errors.email && <span className='d-block text-danger'>Password required</span>}
                <label className='mt-2'>Confirm Password:</label>
                <input {...register('confirmPassword', { validate: (item) => getValues('password') === item })} className='form-control' type="text" />
                {errors.email && <span className='d-block text-danger'>Password not match</span>}
                <button className='btn btn-primary my-4  '>Submit</button>

            </form>

        </div>
    )
}

export default Form2