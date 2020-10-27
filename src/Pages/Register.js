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
min-width:40%;
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


export default function Register() {
    return (
        <Wrapper>
            <EntryForm>
                <Title3>Register new user</Title3>
                <Title5>Already registered? <Link to="/login">Login</Link></Title5>

                <Label for="firstName">First name</Label>
                <Input type="text" id="firstName" name="firstName" />

                <Label for="lastName">Last name</Label>
                <Input type="text" id="lastName" name="lastName" />

                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email" />

                <Label for="password">Create password</Label>
                <Input type="password" id="password" name="password" placeholder="Password must be at least 8 characters" />


                <SubmitFormBtn type="submit" value="Register" />
            </EntryForm>
        </Wrapper>
    )
}