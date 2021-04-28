import * as AiIcons from 'react-icons/ai';
import axios from 'axios'
import React, { Component} from 'react'
import { Link } from 'react-router-dom';

 export default class StudentInfo extends Component {
     constructor(){
         super();
        this.state={
             studentinfo:[]
         }
     }
    
     componentDidMount(){
         axios.get("http://localhost:4000/students").then(res=>{
             console.log(res.data) 
             this.setState({
                 ...this.state,
                 studentinfo: res.data
             })
             console.log(this.state.studentinfo)  
         })
     }
     render(){
         console.log(this.state.studentinfo)
         return (
             <div className = "App">
                 <h5 className = "faculty-main-header" style={{marginTop: "1px "}}>
                                          Student's Information
                 </h5>
                 <table className = "faculty-list">
                     <thead>
                     <tr>
                         <th className="faculty-head">Roll</th>
                         <th className="faculty-head">Name</th>
                         <th className="faculty-head">Email</th>
                         <th className="faculty-head" colSpan="3">Action</th>
                     </tr>
                     </thead>
                     <tbody>
                     {this.state.studentinfo?.map?.(info=>{
                         return(
                             <tr key={info?.roll} className = "design-row">
                                 <td className = "faculty-body">{info?.roll}</td>
                                 <td className = "faculty-body">{info?.name}</td>
                                 <td className = "faculty-body">{info?.email}</td>
                                 <td className = "faculty-body"><Link to="/viewstudent" className="editLink"><AiIcons.AiFillEye /></Link></td>
            <td className = "faculty-body"><Link to="/editstudent" className="editLink"><AiIcons.AiFillEdit /></Link></td>
               <td className = "faculty-body"><Link to="#" className="editLink"><AiIcons.AiFillDelete /></Link></td>
                             </tr>
                         )
                     })}
                     </tbody>
                 </table>
    
             </div>
         )
     }


 }