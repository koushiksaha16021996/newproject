import axios from 'axios';
import React, { Component } from 'react'

export default class TakeAtten extends Component {
  constructor(){
    super();
    this.state={
      students:[]
    }
    this.st={
      itemAlign:"center",
      margin: "auto"
    }
    this.st1={
      textAlign:"center"
    }
    this.param=new URLSearchParams();
  }
  componentDidMount(){
    axios.get("http://localhost:4000/students").then(res=>{
      this.setState({
        students:res.data
      })
    })
  }
  ispresent=(id)=>{
    axios.get(`http://localhost:4000/student/${id}`).then(res=>{
      if(res.data.ispresent){
        this.param.append("ispresent" , false)
      }
      else{
        this.param.append("ispresent" , true)
      }
    })
    
    //this.param.append("ispresent" , true)
    axios.put(`http://localhost:4000/students/${id}` , this.param , {
      headers:{
          'content-Type': 'application/x-www-form-urlencoded'
      }
  }).then(res=>{
    axios.get("http://localhost:4000/students").then(res=>{
      this.setState({
        students:res.data
      })
      console.log("stateupdated")
    })
    console.log("attendance state changed")
    console.log(id)
    
  })
  this.param=new URLSearchParams();
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
                {this.state.students.map((s,index)=><tr>
                  <th>{s.roll}</th>
                  <td>{s.name}</td>
                  <td><button onClick={()=>this.ispresent(s._id)}>{!this.state.students[index].ispresent?"Click for present" : "Click for Absent"}</button></td>
                </tr>)}
              </tbody>
            </table>
      </div>
    )
  }
}
