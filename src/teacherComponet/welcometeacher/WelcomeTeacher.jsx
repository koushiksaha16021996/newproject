import React from 'react'

const WelcomeTeacher=()=>{
    const st={
        textAlign:"center",
        marginTop: "3%",
        background: "#f5f5f5",
        width: "600px",
        marginLeft: "30%",
        borderRadius: "10px"
    }
    return(
        <div clssName="welcomemsg" style={st}>
            <h1>WELCOME TO TEACHER PORTAL</h1>
        </div>
    )
}
export default WelcomeTeacher