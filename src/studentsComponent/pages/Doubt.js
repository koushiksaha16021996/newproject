import React from 'react';
import doubt from './doubt.jpg'
import './Doubt.css'
const Doubt = () => {
    return( 
        <div className="cont">
        <div className="ask-doubt">
            <header className="main-headeer">Ask For Doubts</header>
            <figure>
            <img src = {doubt} alt = "confusion" className = "doubt-pic"/>
            <figcaption className="advice">Do you have any doubts?</figcaption>
            </figure>
            <p className="doubt-sugg">If you have any doubts feel free to ask your questions. Please fill the form and our teachers or trainers will get back to you as soon as possible </p>
      
            <form>
              {/* <span className="choose-subject">Subject:</span>  */}
              <select className="subject" aria-label="Default select example"> 
                <option selected>Choose Subject you have doubts</option>
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">React</option>
                <option value="4">ReactNative</option>
                </select>
                
                
            </form>
            <textarea name="comment" className="questions">Enter tour doubts here...</textarea>
            

            <div class="col-12">
    <button type="submit" class="btn btn-primary subButton">Submit</button>
  </div>
        </div>
        </div>
    )
}

export default Doubt