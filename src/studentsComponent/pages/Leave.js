import React from 'react';
import './Leave.css';

function Leave() {
  return (
    <div className='Leave'>
      <form className="form">
         <h1>Apply for Leave</h1>
         <label>Full Name</label>
         <input placeholder="Name" />
         <label>Email</label>
         <input placeholder="Email"/>
         <label>Subject</label>
         <input placeholder="subject"/>
         <label>Message</label>
         <textarea placeholder="Message"></textarea>
         <button type="submit">Submit</button>
       </form>
        
    </div>    
  );
}

export default Leave;
