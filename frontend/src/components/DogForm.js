import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    color: red;
`;

const initialFormValues = {
    name: "",
    breed: "",
    birthday: "",
}

const DogForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);


    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    console.log(formValues);
    
    const handleSubmit = () => {
        axios.post('#', formValues)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        setFormValues(initialFormValues);
    }

    return(
        <Form>
            <label>Name:</label>
                <input type="text" name="name" placeholder="enter doggo's name" onChange={handleChange}></input>
            <label>Breed:</label>
                <input type="text" name="breed" placeholder="enter breed" onChange={handleChange}></input>
            <label>Birthday:</label>
            <input type="date" name="birthday" placeholder="enter birthday" onChange={handleChange}></input>
            <button onSubmit={handleSubmit}>Add Doggo</button>
        </Form>
    )


}

export default DogForm;
