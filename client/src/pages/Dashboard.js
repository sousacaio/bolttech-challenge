import Wrapper from '../components/Wrapper'
import { useParams } from "react-router-dom";
const Dashboard = () => {
    let params = useParams()

    return (
        <Wrapper fluid>
            Dashboard
            {params._id}
        </Wrapper>
    )
}
export default Dashboard;