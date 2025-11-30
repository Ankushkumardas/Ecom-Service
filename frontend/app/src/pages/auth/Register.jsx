import React, { useState } from 'react';
import { register } from '../../components/config/Formconfig';
import Form from '../../components/common/Form';
import { Link } from 'react-router-dom';
const initialdata={
  username:'',
  password:'',
  email:''
}
const Register = () => {
  const [formdata,setformdata]=useState(initialdata)
  const onsubmit=()=>{
    console.log(formdata)
  }
  return (
    <div>
      <h2 className="mb-4 text-md  text-center">Register</h2>
      <Form formcontrols={register()} buttontext={"SignUp"} formdata={formdata} setformdata={setformdata} onsubmit={onsubmit}/>
      <div className=' text-sm text-center mt-2'>
        Already have an account?
        <span>
         <Link to="/auth/login" className='text-blue-500'> {"Login"}</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
