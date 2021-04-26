import React from 'react';

export default function AddStudent() {
    
    return (
        <div className="container" style={{width: "60%", marginLeft: "20%", background: "#f5f5f5", padding: "20px", borderRadius: "10px"}}>
            <center style={{color: "black", textDecoration: "underline", fontFamily: "Copperplate, Papyrus"}}><h2>ADD or EDIT STUDENT DETAILS</h2></center>
            <div className="formbody">
            <form>
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Roll</label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Roll No"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" style={{fontWeight: "700"}}>Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" style={{fontWeight: "700"}}>Address</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address"/>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" style={{fontWeight: "700"}}>Initial status</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Attendance status"/>
                </div>

                
                <center><button type="button" class="btn btn-primary" >Submit</button></center>
            </form>
            </div>
        </div>
        
    )
}
