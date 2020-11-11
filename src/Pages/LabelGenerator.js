
import React, { useState } from "react";
import styled from 'styled-components'
import { Input, Label, LabelDetail } from '../styledComponents/input'
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






export default function LabelGenerator() {

    const [formInput, setFormInput] = useState()

    //set form state
    const handleChange = e => {
        setFormInput({
            ...formInput, [e.target.name]: e.target.value
        })
    }

    //capture user input
    async function generateLabel(e) {
        e.preventDefault()

        const res = await fetch(process.env.REACT_APP_SERVER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput)
        })

        console.log("status", res.status)
        if (res.status === 201) {
        }
        else {
            return alert("Could not generate label")
        }
        console.log(formInput)

        // const [formType, servings, rounding, quantity, units, size, servingUnit, calories, totalFat, saturatedFat, transFat, cholesterol, sodium, carbohydrates, fiber, sugars, addedSugar, protein] = formInput

    }

    function resetForm() {
        setFormInput({})
        document.getElementById("ingredients").reset()
    }

    console.log(formInput)
    return (
        <LabelGeneratorForm
            id="ingredients"
            onSubmit={generateLabel}
            onChange={handleChange}
        >
            <FormType>
                <Title3>Step 1: Choose a Nutrition Label Form</Title3>
                <Option>
                    <Input type="radio" id="basic" name="formType" value="basic" default />
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
                        <Input type="text" id="rounding" name="rounding"></Input>
                        <LabelDetail for="rounding">E.g. Varied, Usually, Default.</LabelDetail>
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
                        <Input type="servingUnit" id="servingUnit" name="servingUnit"></Input>
                        <LabelDetail for="servingUnit">E.g. Grams(g), Milliliters(ml), Softgels, Gummies, Tablets, Capsules.</LabelDetail>
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
                        <Label for="totalFat">Total Fat (g):</Label>
                        <Input type="totalFat" id="totalFat" name="totalFat"></Input>
                    </Detail>
                    <Detail>
                        <Label for="saturatedFat">Saturated Fat (g):</Label>
                        <Input type="saturatedFat" id="saturatedFat" name="saturatedFat"></Input>
                    </Detail>
                    <Detail>
                        <Label for="transFat">Trans Fat (g):</Label>
                        <Input type="transFat" id="transFat" name="transFat"></Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="cholesterol">Cholesterol (mg):</Label>
                        <Input type="number" id="cholesterol" name="cholesterol"></Input>
                    </Detail>

                    <Detail>
                        <Label for="sodium">Sodium (mg):</Label>
                        <Input type="number" id="sodium" name="sodium"></Input>
                    </Detail>

                    <Detail>
                        <Label for="carbohydrates">Total Carbohydrates (g):</Label>
                        <Input type="number" id="carbohydrates" name="carbohydrates"></Input>
                    </Detail>
                </Row>
                <Row>
                    <Detail>
                        <Label for="fiber">Dietary Fiber (g):</Label>
                        <Input type="number" id="fiber" name="fiber"></Input>
                    </Detail>
                    <Detail>
                        <Label for="sugars">Sugars (g):</Label>
                        <Input type="number" id="sugars" name="sugars"></Input>
                    </Detail>
                    <Detail>
                        <Label for="addedSugar">Added Sugar (g):</Label>
                        <Input type="number" id="addedSugar" name="addedSugar"></Input>
                    </Detail>
                    <Detail>
                        <Label for="protein">Protein (g): </Label>
                        <Input type="number" id="protein" name="protein"></Input>
                    </Detail>
                </Row>
                <Breakline />
            </Ingredients>
            <Center>
                <ClearFormBtn type="reset" value="Clear Form" onClick={() => resetForm()}></ClearFormBtn>
                <SubmitFormBtn type="submit" value="Generate"></SubmitFormBtn>
            </Center>
        </LabelGeneratorForm>
    )
}