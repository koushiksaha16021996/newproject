import logo from './logo.svg';
//import './App.css';
import About from './navBarComponent/About';
import Developer from './navBarComponent/Developer';
import ImageSlider from './sliderImage/ImageSlider';
import NavBar from './Navbar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './error/Error';
import Footer from './Footer/Footer';
import StudLogin from './LoginPage/StudLogin';
import TeachLogin from './LoginPage/TeachLogin';
import Teacher_dashboard from './teacherComponet/Teacher_dashboard';
import Student_dashboard from './studentsComponent/Student_dashboard';
import TeacherRegister from './RegisterPage/TeacherRegister';
import StudentRegister from './RegisterPage/StudentRegister';

function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={()=><ImageSlider/>}/>
            <Route exact path="/about" component={()=><About/>}/>
            <Route exact path="/developers" component={()=><Developer/>}/>
            <Route exact path="/studlogin" component={()=><StudLogin/>}/>
            <Route exact path="/student" component={()=><StudLogin/>}/>
            <Route exact path="/faculty" component={()=><TeachLogin/>}/>
            <Route exact path="/studentRegister" component={()=><StudentRegister/>}/>
            <Route exact path="/teachRegister" component={()=><TeacherRegister/>}/>
            <Route exact path="/studRegister" component={()=><StudLogin/>}/>
            <Route exact path="/teachlogin" component={()=><TeachLogin/>}/>
            
            <Route exact path="/studentlogin" component={()=><Student_dashboard/>}/>
            <Route exact path="/teacherlogin" component={()=><Teacher_dashboard/>}/>


          
            <Route exact component={()=><Error/>}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
