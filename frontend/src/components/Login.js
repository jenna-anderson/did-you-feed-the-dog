import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const initialFormValues = {
    email: '',
    password:''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        setFormValues(initialFormValues)
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group 
                className="mb-3" 
                controlId="formBasicEmail" 
                value={formValues.email} 
                onChange={handleChange}
            >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email"/>
            </Form.Group>

            <Form.Group 
                className="mb-3" 
                controlId="formBasicPassword"
                value={formValues.password}
                onChange={handleChange}
            >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login