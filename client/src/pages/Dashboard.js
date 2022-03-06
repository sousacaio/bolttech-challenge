import './dashboard.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'

const Dashboard = () => {

    const [projects, setProjects] = useState([])
    const [userInfo, setUserInfo] = useState({})

    let params = useParams()

    useEffect(() => {
        let userInfo = localStorage.getItem('user')
        setUserInfo(JSON.parse(userInfo))
    }, [])

    const fetchProjects = async () => {
        
    }

    useEffect(() => {

    }, [projects])

    return (
        <div className="container">
            <div className="BodySection">
                <div className="Projects">Projects</div>
                <div className="New-Project">New Projects</div>
            </div>
            <div className="Navbar" style={{ backgroundColor: '#fafafa' }}>
                <div className="User">
                    <Navbar account={userInfo.account} />
                </div>
                <div className="Project">EDirectInsure TODO List</div>
            </div>
        </div>
    )
}
export default Dashboard;