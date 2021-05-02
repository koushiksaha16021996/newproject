import React, { Component } from "react";
import "./feedback.css";
import axios from "axios";

export default class Feedback extends Component {
  constructor() {
    super();
    this.params = new URLSearchParams();
    this.resetForm();
    this.state = {
      "name": "",
      "writeTeachFeed": "",
      "feedbackOptions": "",
      "givefeedback": "",
      "id": "",
      "teacherFeedback":"",
      "studentFeedback":"",
      "specificTeachFeed":""
    };
  }

  handleTeacher = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
    console.log(this.state.name);
console.log(this.state.writeTeachFeed);
  };

  handleSubmitTeach = () => {
    console.log(this.state.name);
    console.log(this.state.writeTeachFeed);
    this.params.append("name",this.state.name)
    this.params.append("writeTeachFeed", this.state.writeTeachFeed);
    axios
      .put(
        `http://localhost:4000/Teacher/${this.state.name}`,
        this.params,
        {
          headers: {
            "content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        alert("feedback sent");
        console.log("Feedback Sent");
      },this.resetForm()).catch(() => {
        console.log('Feeback not sent')
        alert('Feeback not sent')
      })
  };

  resetForm = () => {
   
    this.setState({
      name: null,
      writeTeachFeed:""
    })
  }
 
// Student -> student Feedback

  handleStudent = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmitStud = (e) => {
    console.log(this.state.feedbackOptions);
    console.log(this.state.givefeedback);
    this.params.append("name",this.state.name)
    this.params.append("givefeedback", this.state.givefeedback);
    axios
      .put(
        `http://localhost:4000/Studnt/${this.state.name}`,
        this.params,
        {
          headers: {
            "content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        alert("feedback sent");
        console.log("Feedback Sent");
      },this.resetForm()).catch(() => {
        console.log('Feeback not sent')
        alert('Feeback not sent')
      })  
    
  };





  //fetching teacher data
  componentDidMount() {
    axios.get("http://localhost:4000/teachers").then((res) => {
      console.log(res.data);
      this.setState({
        teacherFeedback: res.data,
      });
      console.log(this.state.teacherFeedback);
    });

    //fetching student data
    axios.get("http://localhost:4000/students").then((res) => {
      console.log(res.data);
      this.setState({
        studentFeedback: res.data,
      });
      console.log(this.state.studentFeedback);
    });
  }

  handleFeed = (id) => {
    axios.get(`http://localhost:4000/teacher/${id}`).then((res) => {
      this.setState({
        ...this.state,
        specificTeachFeed: res.data,
      });
      console.log(this.state.specificTeachFeed);
    });
  };

 
 
 
 
 
 
 









  render(){
    console.log(this.state.id);
    return (
      <div className="feedback">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-ex-12">
            <div className="feedbackcards">
              <p className="feedbackcard__name">Feedback for Teachers</p>
              <select className="feedbackselect" name="name" id="drop" value={this.state.valuee} onChange={this.handleTeacher} >
                <option>Select Teachers Name</option>
                {this.state.teacherFeedback?.map?.((feedback) => {
                  return (
                    <option key={feedback?._id} valuee={feedback?.name} >
                      {feedback?.name}
                    </option>
                  );
                })}
              </select>
              <textarea
                className="form-control feedbacktext"
                name="writeTeachFeed"
                value={this.state.writeTeachFeed}
                id="exampleFormControlTextarea5"
                rows="5"
                onChange={this.handleTeacher}
              ></textarea>
              <button
                className="feedbackbtn"
                type="button"
                onClick={this.handleSubmitTeach}
              >
                submit
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-ex-12">
            <div className="feedbackcards">
              <p className="feedbackcard__name">Feedback for Students</p>
              <select className="feedbackselect" name="name" value={this.state.valuee} onChange={this.handleStudent}>
                <option >Select Students Name</option>
                {this.state.studentFeedback?.map?.((studFeed) => {
                  return <option key={studFeed?.roll} valuee={studFeed?.name}>{studFeed?.name}</option>;
                })}
              </select>
              <textarea className="form-control feedbacktext" id="exampleFormControlTextarea5" rows="5" name="givefeedback" value={this.state.givefeedback} onChange={this.handleStudent} ></textarea>
              <button type="button" className="feedbackbtn" onClick={this.handleSubmitStud}>  submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}