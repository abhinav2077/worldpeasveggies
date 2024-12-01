import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { handleError, handleSuccess } from './Utils'

function Signup() {

    const [signupInfo,setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(name,value);
        const copySignupInfo = {...signupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }
    console.log('SignupInfo -> ',signupInfo)

    const handleSignup = async (e) => {
        e.preventDefault();
        const{name,email,password} = signupInfo;
        if(!name || !email || !password){
            return handleError('All fields are required!')
        }
        try{
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const {success,message,error} = result;
            if(success){
                handleSuccess(message);
                setTimeout(()=>{
                    navigate('/login')
                },1000)
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
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <div className='entries'>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleChange} 
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter your name'
                    value={signupInfo.name}
                />
            </div>
            <div className='entries'>
                <label htmlFor='email'>Email</label>
                <input 
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={signupInfo.email}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={signupInfo.password}
                />
            </div>
            <div>
            <button className='loginbtn' type='submit'>Sign up</button>
            </div>
            <span>Already have an account ? <Link className='signuplink' to="/login">Login</Link></span>
            <ToastContainer />
        </form>
        </div>
    </div>
  )
}

export default Signup