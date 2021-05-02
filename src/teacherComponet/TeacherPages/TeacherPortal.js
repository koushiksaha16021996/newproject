import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './FacultyNotice.css';

export default function TeacherPortal() {
    const [state,setState]=useState({
        date : new Date()
    })
    const [students,setstudents]=useState({
        studentlist:[]
    })
    const [presentstudents,setpresentstudents]=useState({
        presentstudentsstudentlist:[]
    })
    const [defaulder,setdefaulder]=useState({
        defaulderstudent: []
    })
    useEffect(()=>{
        axios.get("http://localhost:4000/students").then(res=>{
            setstudents({
              studentlist:res.data
            })
              console.log(students)
        })
    },[])

    
    const handleclick=()=>{
        
        setpresentstudents({
            presentstudentsstudentlist : []
        })
        var ps=[]
        axios.get(`http://localhost:4000/attendance/${state.date}`).then(res=>{
            res.data.map(item=>{
                ps=[...ps,item.id]
            })
            setpresentstudents({
                presentstudentsstudentlist : ps
            })  
        })
        
    }
    const handleclicks=()=>{
        setdefaulder({
            defaulderstudent : []
        })
        var de=[]
        students.studentlist.map(item=> {
            if(!presentstudents.presentstudentsstudentlist.includes(item._id)){
                de=[...de,item]
            }
        })
        setdefaulder({
            defaulderstudent : de
        })
        console.log("all student",students)
        console.log("present student",presentstudents)
        console.log("defaulder student",defaulder)
    }
    
    const st={
        itemAlign:"center",
        margin: "auto"
      }
      const st1={
        textAlign:"center"
      }
      const st2={
        textAlign:"center",
        padding : "4px"
      }
      const st3={
        textAlign:"center",
        padding : "4px",
        margin: "4px"
      }
      const handledateChange=(e)=>{
        setState({
            date : e.target.value
        })
      }
      console.log(state.date)
    return (
        <div className="container">
            <div className="con1">
             <h4 className="head1">  Notice</h4>
            
             <span className="date-today1">Date:- 24-04-2021</span>
            
             <ul >
               <li>
               <a href="#" className = "link-to-notice1">The submission of all the projects are to be submitted<b> Monday </b></a>
                </li>
               <li>
               <a href="#" className = "link-to-notice1">Exam forms are availabe on official site fill up by <b>Tuesday</b></a>
                </li>
               <li>
               <a href="#" className = "link-to-notice1">Last date to register is <b>28-04-2021 i.e. on Thursday </b>so be quick</a>
                </li>
             </ul>
            
             <span className="date-today1">Date:- 24-04-2021</span>
             <br/>
            
             <ul >
               <li>
               <a href="#" className = "link-to-notice1">The submission of all the projects are to be submitted <b>Monday</b></a>
                </li>
               <li>
               <a href="#" className = "link-to-notice1">Exam forms are availabe on official site fill up by <b>Tuesday</b></a>
                </li>
               <li>
               <a href="#" className = "link-to-notice1">Last date to register is <b>28-04-2021 i.e. on Thursday </b>so be quick</a>
                </li>
             </ul>
            </div>
            <br/>
            <br/>
            <table className="table table-striped w-auto" style={st}>
              <thead>
                <tr className="table-info">
                  <th colSpan="3" style={st1}>STUDENT DAY TO DAY DEFAULDER LIST</th>
                </tr>
                <tr className="table-info">
                  <th colSpan="3" style={st2}>
                    <input type="date" style={st3} value={state.date} onChange={handledateChange}/>
                    <button className="btn btn-danger" style={st3} onClick={handleclick}>Download the defaulderlist</button>
                    <button className="btn btn-danger" style={st3} onClick={handleclicks}>Click to show the list</button>
                    </th>
                </tr>
                <tr className="table-info">
                  <th>ROLL</th>
                  <th>NAME</th>
                  
                </tr>
              </thead>
              <tbody>
               {defaulder.defaulderstudent.map(item=><tr>
                   <td>{item.roll}</td>
                   <td>{item.name}</td>
               </tr>)}
              </tbody>
            </table>
        </div>
    )
}
