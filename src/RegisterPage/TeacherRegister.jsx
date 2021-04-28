import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './Register.css';

export default function TeacherRegister() {

    const history = useHistory()
    const [user,setUser]=useState({
        "name":"",
        "email":"",
        "password":"",
        "specialization":""
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
   param.append("specialization", user.specialization);
    axios.post("http://localhost:4000/teacher", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        window.alert("Registration Successful")
        console.log("ok")
        history.push("/teachlogin")
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
                    <label className="RegisterLabel">Specialization</label>
                    <input type="text" className="form-control" placeholder="Enter your specialization." name="specialization" value={user.specialization} onChange={handleInput}/>
                </div>
                                                                                
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={()=>handlepost()}>Sign Up</button>
                <p className="forgot-password text-right">
                Already have an account? <Link to="/teachlogin">Sign in</Link>
                </p>
            </form>            
        </div>
    )
}
