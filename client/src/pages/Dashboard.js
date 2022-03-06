import Wrapper from '../components/Wrapper'
import { useParams } from "react-router-dom";
import { useState } from 'react';
const Dashboard = () => {

    const [projects, setProjects] = useState([])

    let params = useParams()
    

    return (
        <Wrapper fluid>
            Dashboard
            {params._id}
        </Wrapper>
    )
}
export default Dashboard;