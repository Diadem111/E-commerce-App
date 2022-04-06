import React from 'react'
import {Formik, useFormik} from "formik";
import * as yup from 'yup';

export default function FormikForm() {
    const formik = useFormik({
        initalValues : {
            username : 'dolapo',
            lastname:'',
            email : '',
            password : ''
        },
        onSubmit: (values)=>{
      console.log(values);
        },
        validationSchema : yup.object ({
            username : yup.string().required('required'),
            email : yup.string().required('required').email('not an email')
        }),
        validate:(values)=>{
            let errors = {}
            let regexForUsername = /^Kunle$/
            if(!values.username){
                errors.username = 'this field is required'
                errors.email = 'this email is required'
            
            }else if(!regexForUsername.test(values.username)){
                errors.username = 'username must be kunle'
            }
            if(!values.lastname){
                errors.lastname = 'this field is required'
            }
            if(!values.email){
                errors.email = 'this field is required'
            }
            if(!values.password){
                errors.email = 'this field is required'
            }
            return errors
        }
    })
    // console.log(formik.values);
  return (
    <>
    <div className='container-fluid'>
        <form onSubmit={formik.handleSubmit}>
        <h1>Registration form</h1>
             <div class="mt-3 mb-2">
                 <input type="text" className={Formik.errors.username? 'form-control is-invalid my-2' : 'form-control my-2'} 
                 placeholder="Type your firstName" name='username' onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}/>
                {formik.touched.username?
                  <div className='text-danger'>{formik.errors.username}</div>
                  :null    
            }
                
             </div>
             <div class="mb-2">
             <input type="text" value={formik.values.lastname} class="form-control" placeholder="Type your lastname" name='lastname' onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             />
             {formik.touched.username?
                  <div className='text-danger'>{formik.errors.username}</div>
                  :null    
            }
             </div>
             <div class="mb-2">
             <input type="email" value={formik.values.email}  class="form-control" placeholder="Email" name='email' onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             />
             {formik.touched.username?
                  <div className='text-danger'>{formik.errors.username}</div>
                  :null    
            }
             </div>
             <div class="mt-2 mb-2">
             <input type="text" value={formik.values.pas}  class="form-control" placeholder="password" name='password' onChange={formik.handleChange}
              onBlur={formik.handleBlur}
             />
             {formik.touched.username?
                  <div className='text-danger'>{formik.errors.username}</div>
                  :null    
            }
             </div>
              <button type="submit" class="btn btn-block w-75 mx-auto" >Submit</button>
              </form>
            </div>
    </>
  )
}
