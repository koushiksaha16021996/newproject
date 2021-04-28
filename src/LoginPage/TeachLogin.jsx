import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function TeachLogin() {
    return (
        <div>
            <form className="LoginPage">

                <h1 className="loginHead">Log in</h1>

                <div className="form-group">
                    <label className="loginLabel">Email Id</label>
                    <input type="text" className="form-control" placeholder="Enter Your email id" />
                </div>

                <div className="form-group">
                    <label className="loginLabel">Password</label>
                    <input type="number" className="form-control" placeholder="Enter your password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><Link to="/teacherlogin">Sign in</Link></button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account <Link to="/teachRegister">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}
