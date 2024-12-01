import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from './Utils';
import { ToastContainer } from 'react-toastify';
import './Myaccount.css';

function Myaccount() {

    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[]);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('Logged out!')
        setTimeout(()=>{
            navigate('/login');
        },1000)
    }


  return (
    <div>
        <div className="welcome_header">
                <div className="header_left">
                    <p className="welcome">Welcome,</p>
                    <p className="username">&nbsp;{loggedInUser}</p>
                </div>
                <div className="header_right">
                <button className='logoutbtn' onClick={handleLogout}>Logout</button>
                </div>
            </div>

        <ToastContainer/>
    </div>
  )
}

export default Myaccount
