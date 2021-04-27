import logo from './logo.svg';
//import './App.css';
import About from './navBarComponent/About';
import Developer from './navBarComponent/Developer';
import ImageSlider from './sliderImage/ImageSlider';
import NavBar from './Navbar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './error/Error';
import Footer from './Footer/Footer';
import Teacher_dashboard from './teacherComponet/Teacher_dashboard';
import Student_dashboard from './studentsComponent/Student_dashboard';
import Login from './LoginPage/Login';
import Register from './RegisterPage/Register';

function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={()=><ImageSlider/>}/>
            <Route exact path="/about" component={()=><About/>}/>
            <Route exact path="/developers" component={()=><Developer/>}/>
            <Route exact path="/student" component={()=><Login/>}/>
            <Route exact path="/login" component={()=><Student_dashboard/>}/>
            <Route exact path="/loginpage" component={()=><Login/>}/>
            <Route exact path="/register" component={()=><Register/>}/>
            <Route exact path="/faculty" component={()=><Login/>}/>
            <Route exact path="/login" component={()=><Teacher_dashboard/>}/>
            <Route exact component={()=><Error/>}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
