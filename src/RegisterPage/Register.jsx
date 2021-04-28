import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Register.css';

export default function Register() {
    const [user,setUser]=useState({
        "name":"",
        "email":"",
        "password":"",
        "cPassword":"",
        "accessToken":""
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
   param.append("name", user.name);
   param.append("email", user.email);
   param.append("password", user.password);
   param.append("cPassword", user.cPassword);
   param.append("accessToken", user.accessToken);
    axios.post("http://localhost:4000/user", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        console.log("ok")
    })

}





    return (
        <div>
            <form className="RegisterPage">

                <h1 className="RegisterHead">Register</h1>

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
                <div className="form-group">
                    <label className="RegisterLabel">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Your Password." name="cPassword" value={user.cPassword} onChange={handleInput}/>
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Access Token</label>
                    <input type="text" className="form-control" placeholder="Access Token" name="accessToken" value={user.accessToken} onChange={handleInput}/>
                </div>


                

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}><Link to="/register">Sign Up</Link></button>
                <p className="forgot-password text-right">
                Already have an account? <Link to="/loginpage">Sign in</Link>
                </p>
            </form>
        </div>
    )
}