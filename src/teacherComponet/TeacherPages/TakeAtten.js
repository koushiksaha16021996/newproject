import axios from 'axios';
import React, { Component } from 'react'

export default class TakeAtten extends Component {
  constructor(){
    super();
    this.state={
      students:[],
      attendance:{
        students:[]
      },
      date: new Date()
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
  ispresent=(id,roll,name)=>{
    
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

    //var newdate=new Date(this.state.date)
    //var newdates=newdate.getDate()+"-"+(newdate.getMonth()+1)+"-"+newdate.getFullYear()

    this.param.append("date" , this.state.date)
    this.param.append("id" , id)
    this.param.append("roll" , roll)
    this.param.append("name" , name)
    axios.post("http://localhost:4000/attendance",this.param,{
    headers:{
        'content-Type': 'application/x-www-form-urlencoded'
    }
    }).then(res=>{
        console.log("post attendance")
    })

    this.param=new URLSearchParams();
  }
  
  handledateChange=(e)=>{
    this.setState({
      ...this.state,
        date: e.target.value
    })
    console.log(this.state.date)
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
                  <th colSpan="3" style={this.st1}>
                    <input type="date" value={this.state.date} onChange={this.handledateChange}/>
                    </th>
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
                  <td><button className="btn btn-primary" onClick={()=>this.ispresent(s?._id,s?.roll,s?.name)}>{
                    this.state.attendance.students.includes(s?._id) ? "click to absent" : "click to present"
                  }</button></td>
                </tr>)}
              </tbody>
            </table>
      </div>
    )
  }
}

