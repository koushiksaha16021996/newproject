import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

export default function TeachLogin() {
    const history=useHistory();
    const [user,setUser]=useState({
        "email":"",
        "password": ""
    })
    let name,value
const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({
            ...user,
            [name]:value
        })

    }
const handleClick=()=>{
    console.log(user.email)
    if(!user.email || !user.password){
        alert("-----invalid credentials-----")
        return;
    }
    axios.get(`http://localhost:4000/teachers/${user.email}`).then(res=>{
        if(res.data){
            if(res.data.email===user.email && res.data.password===user.password){
                alert("Login successful")
                history.push("/teacherlogin")
            }
            else{
                alert("-----invalid credentials-----")
            }
        }
        else{
            alert("No matched User found")
            console.log(res.data)
            return;
        }
        
    })
}
    return (
        <div>
            <form className="LoginPage">

                <h1 className="loginHead">Log in</h1>

                <div className="form-group">
                    <label className="loginLabel">Email Id</label>
                    <input type="text" className="form-control" name="email" value={user.email} placeholder="Enter Your email id" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label className="loginLabel">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange}/>
                </div>

                

                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handleClick()}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account <Link to="/teachRegister">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}
