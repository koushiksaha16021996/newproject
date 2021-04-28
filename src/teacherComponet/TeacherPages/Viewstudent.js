import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Viewstudents.css'
const Viewstudent=(props)=>{
    const {ID}=props
    const [student,setstudent]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${ID}`).then(res=>{
            setstudent(res.data)
        })
        console.log(student)
    },[])
    return(
        <div className="container">
            <center><h2>STUDENT DETAILS</h2></center>
            <div className="cardss">
              <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="cards__image"/>
              
              <p className="cards__name">{student?.name}</p>
              <p className="cards__name">RollNo: {student?.roll}</p>
              <p className="cards__name">Email: {student?.email}</p>
              
              <p className="cards__name">Today's attendance: {student?.ispresent?"Present" : "Absent"}</p>
              
              
            
            </div>
        </div>
    )
}
export default Viewstudent