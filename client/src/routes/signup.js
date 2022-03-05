import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import SignupService from '../services/signup-service'

const SignUp = () => {

    const [signup, setSignup] = useState({
        account: '',
        password: ''
    })

    const registerUser = async () => {
        const signupService = new SignupService()
        await signupService.handle(signup)
    }

    const changeValues = (e, field) => {
        setSignup({ ...signup, [field]: e.target.value })
    }

    return (
        <Form style={{ margin: 20, justifyItems: 'center', alignItems: 'center' }}>
            <Form.Text style={{ fontSize: 20 }}>
                Sign Up
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Account</Form.Label>
                <Form.Control
                    onChange={(e) => changeValues(e, 'account')}
                    type="text" placeholder="Enter account" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => changeValues(e, 'password')}
                    type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={registerUser}>
                Sign in
            </Button>
        </Form>
    )
}

export default SignUp;