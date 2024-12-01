import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from './Utils'
import './Login.css'

function Login() {

    const API_BASE_URL = process.env.REACT_APP_API_URL;

    const [loginInfo,setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value);
        const copyLoginInfo = {...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    console.log('loginInfo -> ',loginInfo)

    const handleLogin = async (e) => {
        e.preventDefault();
        const{email,password} = loginInfo;
        if(!email || !password){
            return handleError('All fields are required!')
        }
        try{
            const url = `${API_BASE_URL}/auth/login`;
            const response = await fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const {success,message,jwtToken,name,error} = result;
            if(success){
                handleSuccess(message);
                localStorage.setItem('token',jwtToken);
                localStorage.setItem('loggedInUser',name);
                setTimeout(()=>{
                    navigate('/home')
                },2000)
            }else if(error){
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message);
            }
            console.log(result);

        }catch(err){
            handleError(err);
        }
    }

    

  return (
    <div className='loginpage'>
        <h1 className='logintitle'>Worldpeas</h1>
        <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div className='entries'>
                <label htmlFor='email'>Email</label>
                <input 
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={loginInfo.email}
                />
            </div>
            <div className='entries'>
                <label htmlFor='password'>Password</label>
                <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={loginInfo.password}
                />
            </div>
            <div>
            <button className='loginbtn' type='submit'>Login</button>
            </div>
            <p>New to worlpeas ? Sign up now <Link className='signuplink' to="/signup">Signup</Link></p>
            <ToastContainer />
        </form>
        </div>
    </div>
  )
}

export default Login