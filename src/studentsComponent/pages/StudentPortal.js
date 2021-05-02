import axios from "axios";
import React, { Component } from "react";
import "./Attendance.css";
import Notice from './Notice'

class AttendanceSheet extends Component {
 // const [date,setDate]=useState({
 //   "datePicker":""
 // })
 // const [students,setStudents]=useState({
 //   student:[]
 // })
 // useEffect(()=>{
 //   axios.get("http://localhost:4000/students").then(res=>{
 //       setStudents({
 //         student:res.data
 //       })
 //       console.log(student)
 //   })
 //   console.log(students)
 // },[])
  //const renderStudent = (student, index) => {
  //  return (
  //    <tr className="tablerow" key={index}>
  //      <td className="tabledata">{student.roll}</td>
  //      <td className="tabledata">{student.name}</td>
  //    </tr>
  //  );
  //};
  constructor(){
    super();
    this.state={
      date:new Date(),
      attendStudent: []
      
    }
    
  }

  componentDidMount(){
    //axios.get("http://localhost:4000/students").then(res=>{
    //  this.setState({
    //    Students:res.data
    //  })
    //    console.log(this.state.Students)
    //})

   //var d= new Date(this.state.date);
   //var D= d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();

   //axios.get(`http://localhost:4000/attendance/${D}`).then(res=>{
   //    this.setState({
   //      attendStudent : res.data
   //    })
   //    console.log(this.state.attendStudent)
   //   // this.state.attendance.students.map(item=>{
   //   //   console.log(item)
   //   // })
   //}) 
  }

  handledateChange=(e)=>{
    this.setState({
        date: e.target.value
    })
    console.log(this.state.date)
    //var d= new Date(this.state.date);
    //var D= d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
  }
  showstudent=()=>{
    axios.get(`http://localhost:4000/attendance/${this.state.date}`).then(res=>{
    this.setState({
      attendStudent : res.data
    })
    console.log(this.state.attendStudent)
})
  }

  render(){
    console.log("in render ",this.state.presentstudent)
    return (
    
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 centerdiv">
              <Notice/>
            </div>
            <div className="col-lg-6">
                <div className="centerdiv">
                <h5 className="atten">Attendance Sheet</h5>
                <input className="atten"  type="date"  value={this.state.date} onChange={this.handledateChange}/>
                <button className="btn btn-danger atten" onClick={()=>this.showstudent()}>click to display</button>
                <table className="tHeader">
                  <thead className="tablehead">
                    <tr className="tablerow">
                      <th className="tablehead1">Roll No</th>
                      <th className="tablehead1">Name</th>
                    </tr>
                  </thead>
                  <tbody className="tablebody">
                    {this.state.attendStudent.map(item=>
                    <tr className="tablerow">
                      <td className="tabledata">{item?.roll}</td>
                      <td className="tabledata">{item?.name}</td>
                    </tr>)}
                  </tbody>
                </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AttendanceSheet;
