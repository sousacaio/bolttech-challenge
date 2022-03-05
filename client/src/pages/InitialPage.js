import Wrapper from '../components/Wrapper'
import SignIn from '../routes/singin'
import SignUp from '../routes/signup'
import { Row } from 'react-bootstrap'
const InitialPage = () => {
    return (
        <Wrapper fluid>
            <Row style={{ justifyItems: 'center', alignItems: 'center' }}>
                <SignIn />
            </Row>
            <Row style={{ justifyItems: 'center', alignItems: 'center' }}>
                <SignUp />
            </Row>
        </Wrapper>
    )
}
export default InitialPage;