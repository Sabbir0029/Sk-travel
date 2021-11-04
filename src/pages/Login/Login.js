import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth/UseAuth';
import img from '../../img/google-1088004_960_720.png'
import img1 from '../../img/GitHub-logo.png'
import './Login.css'

const Login = () => {
  const {googlelognin, githublogin,} = UseAuth();
  const location = useLocation()
  const history = useHistory()
  const location_url = location.state?.from || '/';

  const googleBtn =()=>{
    googlelognin()
    .then(result =>{
      history.push(location_url)
    })
  }
  return (
    <div className='d-flex justify-content-center align-items-center page'>
      <div className='mt-5 p-5 login'>
      <h1>Please Login in</h1>
       <div className='text-center p-2 google'>
         <img onClick={googleBtn} src={img} alt="" />
         <img onClick={githublogin} src={img1} alt="" />
       </div>
      </div>
    </div>
  );
};

export default Login;