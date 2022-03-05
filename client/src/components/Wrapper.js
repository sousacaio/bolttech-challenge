import { Container } from 'react-bootstrap'

const Wrapper = (props) => {
    return (
        <Container fluid style={{ height: '100vh', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
            {props.children}
        </Container>
    )
}

export default Wrapper;