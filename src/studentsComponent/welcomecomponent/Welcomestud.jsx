import React from 'react'


const Welcomestud=()=>{
    const st={
        textAlign:"center",
        marginTop: "3%",
        transition: "width 2s",
        background: "#f5f5f5",
        width: "600px",
        marginLeft: "30%",
        borderRadius: "10px"
    }
    return(
        <div clssName="welcomemsg" style={st}>
            <h1>WELCOME TO STUDENT PORTAL</h1>
        </div>
    )
}
export default Welcomestud