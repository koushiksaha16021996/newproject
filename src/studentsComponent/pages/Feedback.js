import React from 'react';
import "./feedback.css"

function Feedback() {
  return (
    <div className="feedback">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-ex-12">
          <div className="feedbackcards">

            <p className="feedbackcard__name">Feedback for Teachers</p>
            <select className="feedbackselect">
              <option>teachers</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              <option>hi</option>
              
            </select>
            <textarea className="form-control feedbacktext" id="exampleFormControlTextarea5" rows="5"></textarea>
            <button className="feedbackbtn">submit</button> 
              
            
          </div> 
        </div>
        <div className="col-lg-6 col-sm-12 col-ex-12">
          <div className="feedbackcards">

            <p className="feedbackcard__name">Feedback for Students</p>
            <select className="feedbackselect">
              <option>students</option>
            </select>
            <textarea className="form-control feedbacktext" id="exampleFormControlTextarea5" rows="5"></textarea>
            <button className="feedbackbtn">submit</button>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Feedback;
