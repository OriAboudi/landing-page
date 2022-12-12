import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // email,password,confirm password,fullname,birthdate
    
    const onSub = (_bodyData) =>{
        console.log(_bodyData)
    }

    return (
        <div className='d-flex justify-content-center'>

            <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-9 col-8 mt-5 shadow p-3 rounded-5'>
                <h1>Sign Up</h1>
                <label className='mt-2'>Full Name:</label>
                <input {...register('fullName', { required: true, minLength: 2, maxLength: 20 })} className='form-control' type="text" />
                {errors.fullName && <span className='d-block text-danger'>Invalid Full Name....</span>}
                <label className='mt-2'>Email:</label>
                <input {...register('email', { required: true, pattern: emailReg })} className='form-control' type="text" />
                {errors.email && <span className='d-block text-danger'>Invalid email....</span>}

                <label className='mt-2'>Password:</label>
                <input {...register('password', { required: true, minLength: 4, maxLength: 20 })} className='form-control' type="password" />
                {errors.password && <span className='d-block text-danger'>Invalid password....</span>}

                <label className='mt-2'>Confirm Password:</label>
                <input {...register('confirmPassword', { required: true, validate: (item) => getValues('password') === item })} className='form-control' type="password" />
                {errors.confirmPassword && <span className='d-block text-danger'>password not match....</span>}

                <label className='mt-2'>Birthdate:</label>
                <input {...register('birthDate', { required: true })} className='form-control text-center' type="date" />
                {errors.birthDate && <span className='d-block text-danger'>birthdate is required...</span>}
                <button className='btn btn-primary mt-3 px-4 py-2'>Sign Up</button>
            </form>

        </div>
    )
}

export default Form