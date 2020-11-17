
import React, { useState } from "react";
import styled from 'styled-components'
import { Input, Label, LabelDetail, Select, Detail, InputBox } from '../styledComponents/input'
import { SubmitFormBtn, ClearFormBtn } from '../styledComponents/buttons'
import { Title3 } from '../styledComponents/heading'

const LabelGeneratorForm = styled.form`
max-width:800px;
`

const FormType = styled.div`
padding:1rem;
`

const Option = styled.option`
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
                    <Input type="radio" id="vertical" name="formType" value="vertical" default />
                    <Label for="vertical">Standard nutrition label with extra fields for misc. vitamins. Vertical Layout</Label>
                </Option>
                <Option>
                    <Input type="radio" id="horizontal" name="formType" value="horizontal" />
                    <Label for="horizontal">Standard nutrition label with extra fields for misc. vitamins. Horizontal Layout</Label>
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
                <Row>
                    <Detail>
                        <Label for="vitaminDataFormat">Vitamin Data Format:</Label>
                        <Select id="vitaminDataFormat" name="vitaminDataFormat">
                            <Option value="percentage">Percentage</Option>
                            <Option value="unitsofMeasure">Units of Measure</Option>
                        </Select>
                    </Detail>
                    <Detail>
                        <Label for="calcium">Calcium (%):</Label>
                        <Input type="number" id="calcium" name="calcium"></Input>
                    </Detail>
                    <Detail>
                        <Label for="iron">Iron (%):</Label>
                        <Input type="number" id="iron" name="iron"></Input>
                    </Detail>
                    <Detail>
                        <Label for="vitaminD">Vitamin D (%): </Label>
                        <Input type="number" id="vitaminD" name="vitaminD"></Input>
                    </Detail>
                    <Detail>
                        <Label for="potassium">Potassium (%): </Label>
                        <Input type="number" id="potassium" name="potassium"></Input>
                    </Detail>
                </Row>
                <Breakline />
                <Row>
                    <Detail>
                        <Label for="vitaminA">Vitamin A (%)</Label>
                        <Input type="number" id="vitaminA" name="vitaminA"></Input>
                    </Detail>
                    <Detail>
                        <Select id="vitaminAUnit" name="vitaminAData">
                            <Option value="rentinol">As rentinol</Option>
                            <Option value="betaCarotene">As beta-carotene</Option>
                        </Select>
                    </Detail>
                    <Detail>
                        <Label for="vitaminC">Vitamin C (%)</Label>
                        <Input type="number" id="vitaminC" name="vitaminC"></Input>
                    </Detail>
                    <Detail>
                        <Label for="vitaminE">Vitamin E (%)</Label>
                        <Input type="number" id="vitaminE" name="vitaminE"></Input>
                    </Detail>
                    <Detail>
                        <Select id="vitaminEUnit" name="vitaminEData">
                            <Option value="rentinol">From RRR-alpha-tocopherol</Option>
                            <Option value="betaCarotene">From All-rac-alpha-tocopherol</Option>
                        </Select>
                    </Detail>
                    <Detail>
                        <Label for="vitaminK">Vitamin K (%)</Label>
                        <Input type="number" id="vitaminK" name="vitaminK"></Input>
                    </Detail>
                    <Detail>
                        <Label for="thiamin">Thiamin (%):</Label>
                        <Input type="number" id="thiamin" name="thiamin"></Input>
                    </Detail>
                    <Detail>
                        <Label for="riboflavin">Riboflavin (%):</Label>
                        <Input type="number" id="riboflavin" name="riboflavin"></Input>
                    </Detail>
                    <Detail>
                        <Label for="niacin">Niacin (%):</Label>
                        <Input type="number" id="niacin" name="niacin"></Input>
                    </Detail>
                    <Detail>
                        <Label for="folate">Folate (%):</Label>
                        <Input type="number" id="folate" name="folate"></Input>
                    </Detail>
                    <Detail>
                        <Label for="folicAcid">Folic Acid (mcg): (%):</Label>
                        <Input type="number" id="folicAcid" name="folicAcid"></Input>
                    </Detail>
                    <Detail>
                        <Label for="vitaminB12">Vitamin B12 (%):</Label>
                        <Input type="number" id="vitaminB12" name="vitaminB12"></Input>
                    </Detail>
                    <Detail>
                        <Label for="biotin">Biotin (%):</Label>
                        <Input type="number" id="biotin" name="biotin"></Input>
                    </Detail>
                    <Detail>
                        <Label for="pantothenicAcid">Pantothenic Acid (%):</Label>
                        <Input type="number" id="pantothenicAcid" name="pantothenicAcid"></Input>
                    </Detail>
                    <Detail>
                        <Label for="phosphorus">Phosphorus (%):</Label>
                        <Input type="number" id="phosphorus" name="phosphorus"></Input>
                    </Detail>
                    <Detail>
                        <Label for="iodine">Iodine (%):</Label>
                        <Input type="number" id="iodine" name="iodine"></Input>
                    </Detail>
                    <Detail>
                        <Label for="magnesium">Magnesium (%):</Label>
                        <Input type="number" id="magnesium" name="magnesium"></Input>
                    </Detail>
                    <Detail>
                        <Label for="zinc">Zinc (%):</Label>
                        <Input type="number" id="zinc" name="zinc"></Input>
                    </Detail>
                    <Detail>
                        <Label for="selenium">Selenium (%):</Label>
                        <Input type="number" id="selenium" name="selenium"></Input>
                    </Detail>
                    <Detail>
                        <Label for="copper">Copper (%):</Label>
                        <Input type="number" id="copper" name="copper"></Input>
                    </Detail>
                    <Detail>
                        <Label for="manganese">Manganese (%):</Label>
                        <Input type="number" id="manganese" name="manganese"></Input>
                    </Detail>
                    <Detail>
                        <Label for="chromium">Chromium (%):</Label>
                        <Input type="number" id="chromium" name="chromium"></Input>
                    </Detail>
                    <Detail>
                        <Label for="molybdenum">Molybdenum (%):</Label>
                        <Input type="number" id="molybdenum" name="molybdenum"></Input>
                    </Detail>
                    <Detail>
                        <Label for="chloride">Chloride (%):</Label>
                        <Input type="number" id="chloride" name="chloride"></Input>
                    </Detail>
                </Row>
            </Ingredients>
            <Center>
                <ClearFormBtn type="reset" value="Clear Form" onClick={() => resetForm()}></ClearFormBtn>
                <SubmitFormBtn type="submit" value="Generate"></SubmitFormBtn>
            </Center>
        </LabelGeneratorForm>
    )
}