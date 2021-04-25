import React from 'react'
import './Viewstudents.css'
const Viewstudent=()=>{
    return(
        <div className="container">
            <center><h2>STUDENT DETAILS</h2></center>
            <div className="cardss">
              <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="cards__image"/>
              
              <p className="cards__name">Koushik Saha</p>
              <p className="cards__name">RollNo: 1</p>
              <p className="cards__name">Email: </p>
              <p className="cards__name">Address: </p>
              <p className="cards__name">Today's attendance: absent</p>
              <p className="cards__name">Teacher's Feedback: nothing to show</p>
              <p className="cards__name">Student's Feedback: nothing to show</p>
              
            
            </div>
        </div>
    )
}
export default Viewstudent