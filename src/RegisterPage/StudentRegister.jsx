import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

export default function StudentRegister() {
    const history = useHistory()
    const date=new Date()
    const [user,setUser]=useState({
        "roll":"",
        "name":"",
        "email":"",
        "password":"",
        "ispresent":false,
        "attendanceTime":""
    })
    const param=new URLSearchParams();
    let name, value
const handleInput=(e)=>{
        
        name=e.target.name
        value = e.target.value
        setUser({
            ...user,
            [name]:value
        })
    }

const handlepost=()=>{
    //e.preventDefault();
   param.append("roll", user.roll); 
   param.append("name", user.name);
   param.append("email", user.email);
   param.append("password", user.password);
    axios.post("http://localhost:4000/student", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        window.alert("Registration Successful")
        console.log("ok")
        history.push("/studlogin")

    })
    console.log(user.ispresent)
}


    return (
        <div>
            <form className="RegisterPage">

                <h1 className="RegisterHead">Register</h1>

                <div className="form-group">
                    <label className="RegisterLabel">Roll No</label>
                    <input type="Number" className="form-control" placeholder="Enter Your Roll no." name="roll" value={user.roll} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={user.email} onChange={handleInput}/>
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password." name="password" value={user.password} onChange={handleInput}/>
                </div>
                                                                                
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}>Sign Up</button>
                <p className="forgot-password text-right">
                Already have an account? <Link to="/studlogin">Sign in</Link>
                </p>
            </form>
        </div>
    )
}