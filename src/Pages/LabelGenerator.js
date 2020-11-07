
import React, { useState } from "react";
import styled from 'styled-components'
import { Input, Label, Select, } from '../styledComponents/input'
import { SubmitFormBtn, ClearFormBtn } from '../styledComponents/buttons'
import { Title3 } from '../styledComponents/heading'

const LabelGeneratorForm = styled.form`
max-width:800px;
`

const FormType = styled.div`
padding:1rem;
`

const Option = styled.div`
border:1px solid black;
border-radius:5px;
padding:1rem;
margin-bottom:1rem;
cursor:pointer;
background-color:#eee
`

const Breakline = styled.div`
height:1px;
background-color:grey;
`

const Ingredients = styled.div`
padding:1rem;
`

const Detail = styled.div`
display:flex;
flex-direction:column;
margin-right:2rem;
margin-bottom:1rem;
flex-wrap: wrap;
`

const Row = styled.div`
display: flex;
flex-wrap: wrap;
`

const Center = styled.div`
text-align:center;
`

function handleSubmit(e) {
    e.preventDefault()
    //fetch here
}


export default function LabelGenerator() {

    const [formInput, setFormInput] = useState()

    //set form state
    const handleChange = e => {
        setFormInput({
            ...formInput, [e.target.name]: e.target.value
        })
        console.log(formInput)
    }


    return (
        <LabelGeneratorForm
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <FormType>
                <Title3>Step 1: Choose a Nutrition Label Form</Title3>
                <Option>
                    <Input type="radio" id="basic" name="formType" value="basic" defaultChecked />
                    <Label for="basic">The most basic nutrition label. Vertical layout.</Label>
                </Option>
                <Option>
                    <Input type="radio" id="standard" name="formType" value="standard" />
                    <Label for="standard">Standard nutrition label with extra fields for misc. vitamins. Vertical layout.</Label>
                </Option>
                <Option>
                    <Input type="radio" id="tabbed" name="formType" value="tabbed" />
                    <Label for="tabbed">Tabbed nutrition label for bottles and round containers. Horizontal layout.</Label>
                </Option>
            </FormType>

            <Ingredients>
                <Title3>Step 2: Fill out the product information (leave a field blank to skip)</Title3>
                <Row>
                    <Detail>
                        <Label for="servings">Servings per container:</Label>
                        <Input type="number" id="servings" name="servings"></Input>
                    </Detail>
                    <Detail>
                        <Label for="rounding">Rounding:</Label>
                        <Select name="rounding" id="rounding">
                            <option value="default">Default</option>
                            <option value="usually">Usually</option>
                            <option value="varied">Varied</option>
                        </Select>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="quantity">Quantity:</Label>
                        <Input type="quantity" id="quantity" name="quantity"></Input>
                    </Detail>
                    <Detail>
                        <Label for="units">Units:</Label>
                        <Input type="units" id="units" name="units"></Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="size">Serving size:</Label>
                        <Input type="size" id="size" name="size"></Input>
                    </Detail>
                    <Detail>
                        <Label for="servingUnit">Serving size units:</Label>
                        <Select name="servingUnit" id="servingUnit">
                            <option value="grams">Grams(g)</option>
                            <option value="millimeters">Milliliters (mL)</option>
                        </Select>
                    </Detail>
                </Row>
                <Breakline />
                <Row>
                    <Detail>
                        <Label for="calories">Calories:</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                </Row>
                <Breakline />
                <Row>
                    <Detail>
                        <Label for="calories">Total Fat (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                    <Detail>
                        <Label for="calories">Saturated Fat (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                    <Detail>
                        <Label for="calories">Trans Fat (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="calories">Cholesterol (mg):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>

                    <Detail>
                        <Label for="calories">Sodium (mg):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>

                    <Detail>
                        <Label for="calories">Total Carbohydrates (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="calories">Dietary Fiber (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                    <Detail>
                        <Label for="calories">Sugars (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                    <Detail>
                        <Label for="calories">Added Sugar (g):</Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                    <Detail>
                        <Label for="calories">Protein (g): </Label>
                        <Input type="calories" id="calories" name="calories"></Input>
                    </Detail>
                </Row>
                <Breakline />
            </Ingredients>
            <Center>
                <ClearFormBtn type="reset" value="Clear Form"></ClearFormBtn>
                <SubmitFormBtn type="submit" value="Generate"></SubmitFormBtn>
            </Center>
        </LabelGeneratorForm>
    )
}