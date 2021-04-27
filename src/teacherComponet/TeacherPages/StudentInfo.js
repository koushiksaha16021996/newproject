import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


export default function StudentInfo() {


    const studentsInfor = [
        {
            RollNo:1,
            Name:"Subh",
            Email_id:"subh@gmail.com"
        },
        
        {
            RollNo:2,
            Name:"Koushik",
            Email_id:"ks@gmail.com"
        },
        
        {
            RollNo:3,
            Name:"Azam",
            Email_id:"az@gmail.com"
        },
        
        {
            RollNo:4,
            Name:"Debo",
            Email_id:"db@gmail.com"
        },
        
        {
            RollNo:5,
            Name:"Prasad",
            Email_id:"pr@gmail.com"
        },
        
        {
            RollNo:6,
            Name:"Subh",
            Email_id:"sbh@gmail.com"
        },
        {
            RollNo:7,
            Name:"Ashish",
            Email_id:"ash@gmail.com"
        },
        {
            RollNo:8,
            Name:"Divya",
            Email_id:"dv@gmail.com"
        },
        {
            RollNo:9,
            Name:"Raj",
            Email_id:"rj@gmail.com"
        },
        {
            RollNo:10,
            Name:"zee",
            Email_id:"zs@gmail.com"
        },                                  
    ]



const renderStudent = (studentsInfor,index) =>{
    return(
        <tr key = {index} className = "design-row">
            <td className = "faculty-body">{studentsInfor?.RollNo}</td>
            <td className = "faculty-body">{studentsInfor?.Name}</td>
            <td className = "faculty-body">{studentsInfor?.Email_id}</td>
            <td className = "faculty-body"><Link to="/viewstudent" className="editLink"><AiIcons.AiFillEye /></Link></td>
            <td className = "faculty-body"><Link to="/editstudent" className="editLink"><AiIcons.AiFillEdit /></Link></td>
            <td className = "faculty-body"><Link to="#" className="editLink"><AiIcons.AiFillDelete /></Link></td>
            
        </tr>
    )
}   
  

    return (
        <div className="App">
                <h5 className = "faculty-main-header" style={{marginTop: "1px "}}>
                    Student's Information
                </h5>

                <table className = "faculty-list"> 
                    <thead>
                        <tr>
                            <th className="faculty-head">Roll no.</th>
                            <th className="faculty-head">Name</th>
                            <th className="faculty-head">Email id</th>
                            <th className="faculty-head" colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsInfor.map(renderStudent)}
                    </tbody>
                </table>
        </div>
    )
}
