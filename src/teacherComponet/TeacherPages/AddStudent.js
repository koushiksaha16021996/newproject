import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

export default function AddStudent() {
  const history= useHistory()
  const [user, setUser]=useState({
    "roll":"",
    "name":"",
    "email":"",
    "password":""
  })
  let name ,value
  const handleInput=(e) => {
    name=e.target.name
    value=e.target.value
    setUser({
      ...user,
      [name]:value
    })

  }
  

  const param=new URLSearchParams();
  const handleSubmit=()=>{
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
        window.alert("Successfully Added")
        console.log("ok")
        history.push("/studentinfo")
    })

}
    
    return (
        <div className="container" style={{width: "60%", marginLeft: "20%", background: "#f5f5f5", padding: "20px", borderRadius: "10px"}}>
            <center style={{color: "black", textDecoration: "underline" }}><h2>ADD or EDIT STUDENT DETAILS</h2></center>
            <div className="formbody">
            <form > 

                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Roll</label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll No" value={user.roll} name="roll" onChange={handleInput}/>
                </div>
                
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" value={user.name} name="name" onChange={handleInput}/>
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={user.email} name="email" onChange={handleInput}/>
                </div>
       
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Password</label>
                  <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="password" value={user.password} name="password" onChange={handleInput}/>
                </div>

                
                <center><button type="button" class="btn btn-primary" value="Submit" onClick={()=>handleSubmit()}>Submit</button></center>
            </form>
            </div>
        </div>
        
    )
}
