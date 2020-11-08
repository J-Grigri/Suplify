import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Input, Label } from '../styledComponents/input'
import { SubmitFormBtn } from '../styledComponents/buttons'
import { Title3, Title5 } from '../styledComponents/heading'
import EntryForm from '../styledComponents/entryForm'

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
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