import logo from './logo.svg';
//import './App.css';
import About from './navBarComponent/About';
import Developer from './navBarComponent/Developer';
import ImageSlider from './sliderImage/ImageSlider';
import NavBar from './Navbar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './error/Error';

function App() {
  return (
    <div>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={()=><ImageSlider/>}/>
            <Route exact path="/about" component={()=><About/>}/>
            <Route exact path="/developers" component={()=><Developer/>}/>
            <Route exact component={()=><Error/>}/>
          </Switch>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
