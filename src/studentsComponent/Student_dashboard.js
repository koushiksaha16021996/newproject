import React from 'react';
import './Student_dashboard';
import SlideNav from './Components/SlideNav';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StudentPortal from './pages/StudentPortal';
import Feedback from './pages/Feedback';
import Leave from './pages/Leave';
import Doubt from './pages/Doubt';
import Welcomestud from './welcomecomponent/Welcomestud'

function Student_dashboard() {
  return (
    <>
    <Welcomestud/>
      <Router>
        <SlideNav />
        <Switch>
                    <Route exact path="/" component={()=><Redirect to="/studentportal"/>}/>
                    <Route exact path="/login" component={()=><Redirect to="/studentportal"/>}/>
                    <Route exact path="/studentportal" component={()=><StudentPortal/>}/>
                    <Route exact path="/feedback" component={()=><Feedback/>}/>
                    <Route exact path="/leave" component={()=><Leave/>}/>
                    <Route exact path="/doubt" component={()=><Doubt/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default Student_dashboard;
