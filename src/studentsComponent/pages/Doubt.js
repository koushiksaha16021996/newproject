import React,{ useState } from 'react';
import axios from 'axios';
import doubt from './doubt.jpg'
import './Doubt.css'
const Doubt = () => {

  const [user, setUser]=useState({
    "message":""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }


  const param=new URLSearchParams();
  const handleSubmit=()=>{

   param.append("message", user.message);
    axios.post("http://localhost:4000/mail", param,{
        headers:{

            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        window.alert("Message Sent")
        console.log("ok")
    },resetForm()).catch(() => {
      console.log('message not send')
      alert('message not sent')
    })
    //param=new URLSearchParams();
}


  const resetForm=() => {
    setUser({
      message:""
    })

    setTimeout(() => {
      setUser({
        sent: false,
      })
    },3000)
  }


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
              <select className="subject" aria-label="Default select example" > 
                <option selected>Choose Subject you have doubts</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React">React</option>
                <option value="ReactNative">ReactNative</option>
                </select>
                
                
            </form>
            <textarea name="comment" className="question" value={user.message} name="message" onChange={handleChange}>Enter tour doubts here...</textarea>
            

            <div class="col-12">
    <button type="button" value="submit" class="btn btn-primary subButton" onClick={()=>handleSubmit()}>Submit</button>
  </div>
        </div>
        </div>
    )
}

export default Doubt