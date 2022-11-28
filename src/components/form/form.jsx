// import React from 'react'
// import { useForm } from "react-hook-form";

// function Form() {
//     const { register, handleSubmit, getValues, formState: { errors } } = useForm();
//     return (
//         <div>
//             <h2 className='display-3 text-center'>My Form</h2>
//             <form className='form-control mx-auto'>
//                 <div>
//                     <label htmlFor="">Full Nmae:</label>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <label htmlFor="">Birthdate:</label>
//                     <input type="data" className='text-center' />
//                 </div>  <div>
//                     <label htmlFor="">Email:</label>
//                     <input type="text" />
//                 </div>  <div>
//                     <label htmlFor="">Password:</label>
//                     <input type="text" />
//                 </div>  <div>
//                     <label htmlFor="">Confirm Password</label>
//                     <input type="text" />
//                 </div>
//             </form> 
//         </div>
//     )
// }

// export default Form


import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    // email,password,confirm password,fullname,birthdate
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const onSub = (_bodyData) => {
        console.log(_bodyData)
    }

    return (
        <div className='d-flex justify-content-center'>

            <form onSubmit={handleSubmit(onSub)} className='col-lg-4 col-md-5 col-8 mt-4 shadow p-3 rounded-5'>
                <h1>Sign Up</h1>
                <label className='mt-2'>FullName:</label>
                <input {...register('fullName', { required: true, minLength: 2, maxLength: 20 })} placeholder='Name...' className='form-control' type="text" />
                {errors.fullName && <span className='d-block text-danger'>Invalid Name...</span>}
                <label className='mt-2'>Email:</label>
                <input {...register('email', { required: true, pattern: emailReg })} placeholder='Email...' className='form-control' type="text" />
                {errors.fullName && <span className='d-block text-danger'>Invalid Email...</span>}
                <label className='mt-2'>Password:</label>
                <input {...register('password', { required: true, minLength: 4, maxLength: 20 })} className='form-control' type="password" />
                {errors.fullName && <span className='d-block text-danger'>Invalid password...</span>}
                <label className='mt-2'>Confirm Password:</label>
                <input {...register('confirmPassword', { validate: (item) => getValues('password') === item })} className='form-control' type="password" />
                {errors.fullName && <span className='d-block text-danger'>Password not match...</span>}
                <label className='mt-2'>Birthdate:</label>
                <input {...register('birthdate', { required: true })} className='form-control text-center' type="date" />
                {errors.fullName && <span className='d-block text-danger'>Birthdate is required...</span>}
                <button className='btn btn-primary mt-3 px-4 py-2'>Sign Up</button>
            </form>

        </div>
    )
}

export default Form