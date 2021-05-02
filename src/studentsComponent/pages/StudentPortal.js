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
      "date":"",
      Students:[],
      attendance:{},
      presentstudent:[]
    }
    
  }

  componentDidMount(){
    axios.get("http://localhost:4000/students").then(res=>{
      this.setState({
        Students:res.data
      })
        console.log(this.state.Students)
    })

    var d= new Date();
    var D= d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();

    axios.get(`http://localhost:4000/attendance/${D}`).then(res=>{
        this.setState({
          attendance : res.data
        })
        //console.log(this.state.attendance.students[0].length)
       // this.state.attendance.students.map(item=>{
       //   console.log(item)
       // })
    }) 
  }
  
  renderStudent=()=>{
    var re=[];
    //console.log("upcomming",this.state.attendance)
    //for(var i=0;i<this.state.Students.length;i++){
    //  console.log("new students",!this.state.attendance.students.includes(this.state.Students[i]._id))
    //  
    //  if(!this.state.attendance.students.includes(this.state.Students[i]?._id)){
    //    re.push(this.state.Students[i])
    //    console.log("xd",this.state.Students[i])
    //  }
    //}
    //this.setState({
    //  ...this.state,
    //  presentstudent : re
    //})
    //console.log("renderstudent",this.state.presentstudent)
    //for(var i=0;i<this.state.attendance.students.length;i++){
    //  
    //}
    this.state.attendance.students.map(item=>{
      axios.get(`http://localhost:4000/student/${item}`).then(res=>{
        re.push(res.data)
      })
    })
    this.setState({
      ...this.state,
      presentstudent : re
    })
      

  }

  dateChange=(e)=>{
    const {name,value}=e.target
    this.setState({
      ...this.state,
      [name]:value
    })
    console.log(this.state.date)
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
                
                <button className="btn btn-danger" onClick={()=>this.renderStudent()}>show</button>
                <table className="tHeader">
                  <thead className="tablehead">
                    <tr className="tablerow">
                      <th className="tablehead1">Roll No</th>
                      <th className="tablehead1">Name</th>
                    </tr>
                  </thead>
                 {/*} <tbody className="tablebody">{this.state.attendance.students.map(item =><tr className="tablerow">
                                                                                      <td className="tabledata">{item.Students}</td> 
                                                                                        </tr>)} 
                  </tbody>*/}

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
