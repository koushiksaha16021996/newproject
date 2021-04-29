import React, { useState } from 'react';
import './Leave.css';
import axios from 'axios';

function Leave() {

  const [user, setUser]=useState({
    "name":"",
    "email":"",
    "subject":"",
    "message":""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }


  const param=new URLSearchParams();
  const handleSubmit=()=>{
   param.append("name", user.name);
   param.append("email", user.email);
   param.append("subject", user.subject); 
   param.append("message", user.message);
    axios.post("http://localhost:4000/apply", param,{
        headers:{

            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        window.alert("Message Sent")
        console.log("ok")
    },resetForm()).catch(() => {
      console.log('message not send')
      alert('message not sent')
    })
    //param=new URLSearchParams();
}

const resetForm=() => {
  setUser({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  setTimeout(() => {
    setUser({
      sent: false,
    })
  },3000)
}




  return (
    <div className='Leave'>
      <form className="form">
         <h1>Apply for Leave</h1>
         <label className="labelName">Full Name</label>
         <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
         <label className="labelName">Email</label>
         <input name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
         <label className="labelName">Subject</label>
         <input name="subject" value={user.subject} onChange={handleChange} placeholder="subject"/>
         <label className="labelName">Message</label>
         <textarea className="labelName" name="message" value={user.message} onChange={handleChange} placeholder="Message"></textarea>
         <button type="button" onClick={handleSubmit}>Submit</button>
       </form>
        
    </div>    
  );
}

export default Leave;
