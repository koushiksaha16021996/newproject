import React from 'react'
import { FaCentercode } from 'react-icons/fa'
const Error=()=>{
    const styleError = {
        textAlign: "center",
        marginTop: "30%",
    }
    return(
        <div className="container">
            <h1 style={styleError}>Oopss...!!!<br/>Error 404</h1> 
        </div>
    )
}
export default Error