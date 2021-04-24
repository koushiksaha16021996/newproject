import React from 'react';
import './Student_dashboard';
import SlideNav from './Components/SlideNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StudentPortal from './pages/StudentPortal';
import Feedback from './pages/Feedback';
import Leave from './pages/Leave';
import Doubt from './pages/Doubt';

function Student_dashboard() {
  return (
    <>
      <Router>
        <SlideNav />
        <Switch>
          <Route path='/' exact component={StudentPortal} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/leave' component={Leave} />
          <Route path='/doubt' component={Doubt} />
        </Switch>
      </Router>
    </>
  );
}

export default Student_dashboard;
