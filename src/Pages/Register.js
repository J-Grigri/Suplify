import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/regLog.css';

export default function Register() {
    return (
        <div className=" regLogForm">
            <form className="col-lg-5 regLogContents">
                <h3>Register new user</h3>
                <h6>Already registered? <Link to="/login">Login</Link></h6>

                <label for="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" />

                <label for="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" />

                <label for="password">Create password</label>
                <input type="password" id="password" name="password" />
                <span >Password must be at least 8 characters</span>

                <input type="submit" value="Register" className="btn-success" />
            </form>
        </div>
    )
}