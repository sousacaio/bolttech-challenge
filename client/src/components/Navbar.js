import { Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const account = useSelector((state) => state.user.account)
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{account}</Accordion.Header>
                <Accordion.Body>
                    Logout
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Navbar;