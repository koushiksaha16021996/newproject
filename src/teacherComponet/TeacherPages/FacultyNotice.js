import React from 'react';
import './FacultyDetails.css';

const Notice = () => {
  return(
    <div className="con">
     <h4 className="head">  Notice</h4>

     <span className="date-today">Date:- 24-04-2021</span>
       
     <ul >
       <li>
       <a href="#" className = "link-to-notice">The submission of all the projects are to be submitted<b> Monday </b></a>
        </li>
       <li>
       <a href="#" className = "link-to-notice">Exam forms are availabe on official site fill up by <b>Tuesday</b></a>
        </li>
       <li>
       <a href="#" className = "link-to-notice">Last date to register is <b>28-04-2021 i.e. on Thursday </b>so be quick</a>
        </li>
     </ul>
    
     <span className="date-today">Date:- 24-04-2021</span>
     <br/>
     
     <ul >
       <li>
       <a href="#" className = "link-to-notice">The submission of all the projects are to be submitted <b>Monday</b></a>
        </li>
       <li>
       <a href="#" className = "link-to-notice">Exam forms are availabe on official site fill up by <b>Tuesday</b></a>
        </li>
       <li>
       <a href="#" className = "link-to-notice">Last date to register is <b>28-04-2021 i.e. on Thursday </b>so be quick</a>
        </li>
     </ul>
    </div>
  )
}

export default Notice