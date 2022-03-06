import './dashboard.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import NewProject from '../components/NewProject'
import GetProjectsService from '../services/get-projects-service'

import { useDispatch, useSelector } from 'react-redux'
import { update } from '../store/projects'

const Dashboard = () => {
    const dispatch = useDispatch()

    const [projects, setProjects] = useState([])

    let reduxProjects = useSelector(state => state.projects)
    let generalStates = useSelector(state => state)
    let params = useParams()

    const fetchProjects = async () => {
        const getProjectsService = new GetProjectsService()
        const response = await getProjectsService.handle(params._id)
        if (response.status === 200) {
            setProjects(response.data)
            dispatch(update(response.data))
        }
    }

    useEffect(() => { fetchProjects() }, [])

    useEffect(() => {
        console.log(generalStates)
        setProjects(reduxProjects.data)
    }, [reduxProjects]);


    return (
        <div className="container">
            <div className="BodySection">
                <div className="Projects" style={{ height: '50%', display: 'flex', justifyContent: 'center', }}>
                    {projects.length > 0 ? <Projects projects={projects} /> : <>No projects yet</>}
                </div>
                <div className="New-Project" style={{ height: '50%', width: 'auto' }}>
                    <NewProject></NewProject>
                </div>
            </div>
            <div className="Navbar" style={{ backgroundColor: '#fafafa' }}>
                <div className="User">
                    <Navbar />
                </div>
                <div className="Project">EDirectInsure TODO List</div>
            </div>
        </div>
    )
}
export default Dashboard;