import { Link } from 'react-router-dom';
import Form from '../../components/common/Form';
import { login } from '../../components/config/Formconfig.js';
import React, { useState } from 'react';
const initialdata = {
  password: '',
  email: ''
}
const Login = () => {
  const [formdata, setformdata] = useState(initialdata)
  const onsubmit = () => {
    console.log(formdata)
  }
  return (
    <div>
      <h2 className="mb-4 text-md  text-center">Login</h2>
      <Form formcontrols={login()} buttontext={"Login"} formdata={formdata} setformdata={setformdata} onsubmit={onsubmit} />      <div className=' text-sm text-center mt-2'>
        Don't have an account?
        <span>
          <Link to="/auth/register" className='text-blue-500'> {"SignUp"}</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
