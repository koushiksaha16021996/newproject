import './FacultyDetails.css';
import axios from 'axios'
import React, { Component} from 'react'
// import { Link } from 'react-router-dom';

 export default class StudentInfo extends Component {
     constructor(){
         super();
         this.state={
            teacherDetails:[]
        }
     }
     componentDidMount(){
        axios.get("http://localhost:4000/teachers").then(res=>{
            console.log(res.data) 
            this.setState({
                
                teacherDetails: res.data
            })
            console.log(this.state.teacherDetails)  
        })
    }
    render(){
        console.log(this.state.teacherDetails)
        return (
            <div className = "App">
                <h5 className = "faculty-main-header" style={{marginTop: "1px "}}>
                                         Faculty Details
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
                    {this.state.teacherDetails?.map?.(teacher=>{
                        return(
                            <tr key={teacher?._id} className = "design-row">
                                <td className = "faculty-body">{teacher?._id}</td>
                                <td className = "faculty-body">{teacher?.name}</td>
                                <td className = "faculty-body">{teacher?.specialization}</td>
                               
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
   
            </div>
        )
    }
    }