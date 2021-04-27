import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    return (
        <div>
            <form className="RegisterPage">

                <h1 className="RegisterHead">Register</h1>

                <div className="form-group">
                    <label className="RegisterLabel">Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                </div>

                <div className="form-group">
                    <label className="RegisterLabel">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your Email." />
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Password</label>
                    <input type="password" className="form-control" placeholder="Enter your Password." />
                </div>
                <div className="form-group">
                    <label className="RegisterLabel">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Your Password." />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><Link to="register">Sign Up</Link></button>
                <p className="forgot-password text-right">
                Already have an account? <a href="#">Sign in</a>
                </p>
            </form>
        </div>
    )
}