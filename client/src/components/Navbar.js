import { Accordion } from 'react-bootstrap';

const Navbar = ({ account }) => {
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