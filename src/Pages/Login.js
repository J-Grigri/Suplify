import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    `

const EntryForm = styled.form`
background-color: lightgrey;
border-radius:5px;
display:flex;
flex-direction: column;
padding:1rem;
margin:2rem;
min-width:30%;
`

const Label = styled.label`
margin-bottom:0.1rem;
font-weight: 400;
`

const Input = styled.input`
margin-bottom:1rem;
font-weight: 300;

`
const SubmitFormBtn = styled.input`
Background-color:green;
border-radius:3px;
margin-top:1rem;
color:white;
font-weight:500;
font-size:large;
`

const Title3 = styled.h3`
font-size:x-large;
text-align:center;
`
const Title5 = styled.h5`
font-size:medium;
text-align:center;
`


export default function Login() {
    return (
        <Wrapper>
            <EntryForm>
                <Title3>Login</Title3>
                <Title5>Not a member yet? <Link to="/register">Register</Link></Title5>

                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email"></Input>

                <Label for="password">Password</Label>
                <Input type="password" id="password" name="password"></Input>


                <Title5>Forgot password?</Title5>
                <SubmitFormBtn type="submit" value="Login"></SubmitFormBtn>
            </EntryForm>
        </Wrapper>
    )
}