import React from 'react';
import './Leave.css';

function Leave() {
  return (
    <div className='Leave'>
      <form className="form">
         <h1>Apply for Leave</h1>
         <label className="labelName">Full Name</label>
         <input placeholder="Name" />
         <label className="labelName">Email</label>
         <input placeholder="Email"/>
         <label className="labelName">Subject</label>
         <input placeholder="subject"/>
         <label className="labelName">Message</label>
         <textarea className="labelName" placeholder="Message"></textarea>
         <button type="submit">Submit</button>
       </form>
        
    </div>    
  );
}

export default Leave;
