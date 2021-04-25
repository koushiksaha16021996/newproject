import React from 'react';
import './FacultyDetails.css';

const FacultyDetails = () => {
    const teachers = [
            {
                teacher_id:1,
                name:"Subh",
                specialization:"React Js"
            },
            
            {
                teacher_id:2,
                name:"Koushik",
                specialization:"React Native"
            },
            
            {
                teacher_id:3,
                name:"Azam",
                specialization:"HTML"
            },
            
            {
                teacher_id:4,
                name:"Debo",
                specialization:"React Js"
            },
            
            {
                teacher_id:5,
                name:"Prasad",
                specialization:"CSS"
            },
            
            {
                teacher_id:6,
                name:"Subh",
                specialization:"JavaScript"
            },
            {
                teacher_id:7,
                name:"loki",
                specialization:"JavaScript"
            },
            {
                teacher_id:8,
                name:"andrrw",
                specialization:"HTML"
            },
            {
                teacher_id:9,
                name:"xfcgc",
                specialization:"JavaScript"
            },
            
            
           
        ]
    
    
    
    const renderTeacher = (teacher,index) =>{
        return(
            <tr key = {index} className = "design-row">
                <td className = "faculty-body">{teacher.teacher_id}</td>
                <td className = "faculty-body">{teacher.name}</td>
                <td className = "faculty-body">{teacher.specialization}</td>
            </tr>
        )
    }   
      
     
    
        return(
            <div className="App">
                <h5 className = "faculty-main-header">
                    Faculty List
                </h5>

                <table className = "faculty-list"> 
                    <thead>
                        <tr>
                            <th className="faculty-head">Teacher Id</th>
                            <th className="faculty-head">Name</th>
                            <th className="faculty-head">Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(renderTeacher)}
                    </tbody>
                </table>
            </div>
        );
    
}

export default FacultyDetails