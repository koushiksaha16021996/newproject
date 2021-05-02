import axios from 'axios';
import React, { Component } from 'react'

export default class TakeAtten extends Component {
  constructor(){
    super();
    this.state={
      students:[],
      attendance:{
        date:'',
        students:[]
      }
    }
    this.st={
      itemAlign:"center",
      margin: "auto"
    }
    this.st1={
      textAlign:"center"
    }
    this.param=new URLSearchParams();
    //this.date=new Date();



  }
  componentDidMount(){
    axios.get("http://localhost:4000/students").then(res=>{
      this.setState({
        students:res.data
      })
    })
    var d= new Date();
    var D= d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
    this.setState({
      ...this.state,
      attendance:{
        ...this.state.attendance,
        date:D
      }
    })
  }
  ispresent=(id)=>{
    
    if(this.state.attendance.students.includes(id)){
      var newstudents=this.state.attendance.students.filter(item=>item!==id)
      this.setState({
        ...this.state,
        attendance:{
          ...this.state.attendance,
          students:newstudents
        }
      })
    }
    else{
      this.setState({
        ...this.state,
        attendance:{
          ...this.state.attendance,
          students:[...this.state.attendance.students,id]
        }
      })
    }
    console.log("all students",this.state.students)
    console.log(this.state.attendance.students)
  }
  handleSubmit=()=>{
    //var date=this.date.getDay()+"-"+this.date.getMonth()+1+"-"+this.date.getFullYear()
    //this.setState({
    //  ...this.state,
    //    attendance:{
    //      name:date
    //    }
    //})
    this.param.append("date" , this.state.attendance.date)
    this.param.append("students" , this.state.attendance.students)
    axios.post("http://localhost:4000/attendance",this.param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
      console.log("attendance done")
    })
    this.param=new URLSearchParams();
    console.log("clicked",this.state.attendance.date)

  }
  render() {
    return (
      <div>
          <table className="table table-striped w-auto" style={this.st}>
              <thead>
                <tr className="table-info">
                  <th colSpan="3" style={this.st1}>STUDENT ATTENDANCE PORTAL</th>
                </tr>
                <tr className="table-info">
                  <th>ROLL</th>
                  <th>NAME</th>
                  <th>ATTENDANCE</th>
                </tr>
              </thead>
              <tbody>
                {this.state.students.map(s=><tr>
                  <th>{s.roll}</th>
                  <td>{s.name}</td>
                  <td><button className="btn btn-primary" onClick={()=>this.ispresent(s?._id)}>{
                    this.state.attendance.students.includes(s?._id) ? "click to absent" : "click to present"
                  }</button></td>
                </tr>)}
              </tbody>
            </table>
            <button  className="btn btn-danger" onClick={()=>this.handleSubmit()}>submit</button>
      </div>
    )
  }
}
