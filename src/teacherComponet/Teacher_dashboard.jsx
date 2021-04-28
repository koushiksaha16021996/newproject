import React from 'react';
import './Teacher_dashboard';
import SlideNavTeacher from './ComponentsTeach/SlideNavTeacher';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TeacherPortal from './TeacherPages/TeacherPortal';
import StudentInfo from './TeacherPages/StudentInfo';
import AddStudent from './TeacherPages/AddStudent';
import FacultyDetails from './TeacherPages/FacultyDetails';
import TakeAtten from './TeacherPages/TakeAtten'; 
import Viewstudent from './TeacherPages/Viewstudent'  
import WelcomeTeacher from './welcometeacher/WelcomeTeacher';
import EditStudent from './TeacherPages/EditStudent';

function Teacher_dashboard() {
  return (
    <>
      <WelcomeTeacher/>
      <Router>
        <SlideNavTeacher />
        <Switch>
                <Route exact path="/" component={()=><Redirect to="/teacherportal"/>}/>
                <Route exact path="/teacherlogin" component={()=><Redirect to="/teacherportal"/>}/>
                <Route exact path='/teacherportal' component={TeacherPortal} />
                <Route exact path='/studentinfo' component={StudentInfo} />
                <Route exact path='/addStudent' component={AddStudent} />
                <Route exact path='/facultyDetails' component={FacultyDetails} />
                <Route exact path='/takeAttendance' component={TakeAtten} />
                <Route exact path="/viewstudent/:id" component={(props)=><Viewstudent ID={props.match.params.id}/>}/>
                <Route exact path="/editstudent" component={AddStudent}/>
                <Route exact path="/editstudent/:id" component={(props)=><EditStudent ID={props.match.params.id} />}/>
        </Switch>
      </Router>
    </>
  );
}

export default Teacher_dashboard;
