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


                <SubmitFormBtn type="submit" value="Login"></SubmitFormBtn>
                <Title5>Forgot password?</Title5>
            </EntryForm>
        </Wrapper>
    )
}