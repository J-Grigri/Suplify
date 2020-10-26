import React from "react";
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <Link to="/login">Login form</Link>
            <br></br>
            <Link to="/register">Register form</Link>
        </div>
    )
}