import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Viewstudents.css'
const Viewstudent=(props)=>{
const {ID}=props
// const teacherFeedback= []
const [student,setstudent]=useState({})
const [teacher,setteacher]=useState([])
const [std,setstd]=useState([])

useEffect(()=>{
axios.get(`http://localhost:4000/student/${ID}`).then(res=>{
setstudent(res.data)
})
console.log(student)
},[])
useEffect(()=>{
    axios.get("http://localhost:4000/students").then(res=>{
    setstd(res.data)
    })
    console.log(std)
    },[])
useEffect(()=>{

axios.get("http://localhost:4000/teachers").then((res) => {
console.log("hi",res.data);
setteacher(res.data);

});
},[])
console.log("helo",teacher);
console.log("o",teacher.name)
console.log("pp",teacher.writeTeachFeed)
return(
<div className="container">
<centre><h2 className="header1">STUDENT DETAILS</h2></centre>
<div className="cardss">
<img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="cards__image"/>

<p className="cards__name">{student?.name}</p>
<p className="cards__name">RollNo: {student?.roll}</p>
<p className="cards__name">Email: {student?.email}</p>


</div>



<div className="container">
<center><h2 className="header2">FEEDBACK</h2></center>
<div className="cardss">





{  
                    teacher.map(user=> <li className="cards__name" key={user._id}>Teacher Name : {user.name}<br/>Feedback : {user.writeTeachFeed}</li>)  
                } 


                




</div>
</div>
<centre><h2 className="header1">STUDENT FEEDBACK</h2></centre>
<div className="cardss">

 {/* <p className="cards__name">Student Name: {student?.name}</p>
<li className="cards__name">Feedback: {student?.givefeedback}</li>  */}
 {  
                    std.map(user=> <li className="cards__name" key={user._id}>Student Name : {user.name}<br/>Feedback : {user.givefeedback}</li>)  
                }  




</div>
</div>

)
}
export default Viewstudent