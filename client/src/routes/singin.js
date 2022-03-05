import Wrapper from '../components/Wrapper'
import { Form, Button } from 'react-bootstrap'
const Signin = () => {
    return (
        <Wrapper >
            <Form style={{ margin: 20,justifyItems:'center',alignItems:'center' }}>
                <Form.Text style={{ fontSize: 20 }}>
                    Login:
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Account</Form.Label>
                    <Form.Control type="email" placeholder="Enter account" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        </Wrapper>
    )
}

export default Signin;