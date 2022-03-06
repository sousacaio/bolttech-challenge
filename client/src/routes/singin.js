import { useState } from 'react'
import Wrapper from '../components/Wrapper'
import { Form, Button } from 'react-bootstrap'
import SignInService from '../services/signin-service'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { update } from '../store/user'

const Signin = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    
    const [signin, setSignIn] = useState({
        account: '',
        password: ''
    })

    const signinUser = async () => {
        const signinService = new SignInService()
        let response = await signinService.handle(signin)
        if (response.status === 200) {            
            dispatch(update(response.data))
            navigate(`/dashboard/${response.data._id}`)            
        }
    }

    const changeValues = (e, field) => {
        setSignIn({ ...signin, [field]: e.target.value })
    }

    return (
        <Wrapper >
            <Form style={{ margin: 20, justifyItems: 'center', alignItems: 'center' }}>
                <Form.Text style={{ fontSize: 20 }}>
                    Login:
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Account</Form.Label>
                    <Form.Control type="text"
                        onChange={(e) => changeValues(e, 'account')}
                        placeholder="Enter account"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        onChange={(e) => changeValues(e, 'password')}
                        placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={signinUser}>
                    Sign in
                </Button>
            </Form>
        </Wrapper>
    )
}

export default Signin;