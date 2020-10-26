import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/regLog.css';

export default function Login() {
    return (
        <div className=" regLogForm">
            <form className="col-lg-5 regLogContents">
                <h3>Login user</h3>
                <h6>Not a member yet? <Link to="/register">Register</Link></h6>


                <label for="email">Email</label>
                <input type="email" id="email" name="email" />

                <label for="password">Password</label>
                <input type="password" id="password" name="password" />

                <span className="forgotPsw">Forgot password?</span>

                <input type="submit" value="Login" className="btn-success" />
            </form>
        </div>
    )
}