import logo from './logo.svg';
import './App.css';
import About from './navBarComponent/About';
import Developer from './navBarComponent/Developer';
import ImageSlider from './sliderImage/ImageSlider';
import NavBar from './Navbar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './error/Error';
import Footer from './Footer/Footer';
import SlideNav from './StudentsComponent/Components/SlideNav';
import StudentPortal from './StudentsComponent/pages/StudentPortal';
import Feedback from './StudentsComponent/pages/Feedback';
import Leave from './StudentsComponent/pages/Leave';
import Doubt from './StudentsComponent/pages/Doubt';

function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar/>
          <SlideNav />
          <Switch>
            <Route exact path="/" component={()=><ImageSlider/>}/>
            <Route exact path="/about" component={()=><About/>}/>
            <Route exact path="/developers" component={()=><Developer/>}/>
            <Route exact component={()=><Error/>}/>
            <Route path='/' exact component={StudentPortal} />
            <Route path='/feedback' component={Feedback} />
            <Route path='/leave' component={Leave} />
            <Route path='/doubt' component={Doubt} />
          </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
