import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `



export default function Homepage() {
    return (
        <Wrapper>
            <Link to="/login">Login form</Link>
            <Link to="/register">Register form</Link>
            <Link to="/label-generator">Label generator</Link>
        </Wrapper>
    )
}