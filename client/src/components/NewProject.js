import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CreateProjectsService from '../services/create-project.service'
const NewProject = () => {
    const [name, setName] = useState('')

    const createProject = async () => {
        if (!name) alert('Fill the field of project name')
        const create = new CreateProjectsService();
        const userData = localStorage.getItem('user')
        const user = JSON.parse(userData)
        await create.handle(user._id, name)
    }
    return (
        <Form style={{ backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Label>Create a new project</Form.Label>
            </div>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Project name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={createProject}>
                Create Project
            </Button>
        </Form>
    )
}
export default NewProject;