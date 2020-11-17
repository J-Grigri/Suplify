import styled from 'styled-components'

export const Detail = styled.div`
display:flex;
flex-direction:column;
justify-contents:center;
margin-right:2rem;
margin-bottom:1rem;
flex-wrap: wrap;
`

export const Input = styled.input`
font-size:medium;
font-weight:450;
outline:none;
background-color:#eee;
border:1px solid black;
border-radius:3px;
padding:.25rem;
`
export const InputBox = styled.input`
type:checkbox
font-size:medium;
font-weight:450;
outline:none;
background-color:#eee;
border:1px solid black;
border-radius:3px;
padding:.25rem;
`

export const Label = styled.label`
font-size:medium;
font-weight:450;
margin: 0.2rem 0;
inline-block;
`
export const LabelDetail = styled(Label)`
font-size:smaller;
font-weight:400;
`

export const Select = styled.select`
font-size:medium;
font-weight:450;
outline:none;
background-color:#eee;
border:1px solid black;
border-radius:3px;
padding:.25rem;
width:180px;
// margin-top:24px;
 display: inline-block;
  vertical-align: middle;

`