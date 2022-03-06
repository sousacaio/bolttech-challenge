import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CreateProjectsService from '../services/create-project.service'
import { useSelector, useDispatch } from 'react-redux'
import { newProject } from '../store/projects'

const NewProject = () => {
    let dispatch = useDispatch()

    const [name, setName] = useState('')

    const user = useSelector((state) => state.user)

    const createProject = async () => {

        if (!name) {
            alert('The project name field is required')
            return
        }

        const create = new CreateProjectsService();

        let response = await create.handle(user._id, name)

        if (response.status === 200) {
            dispatch(newProject(response.data))
            setName('')
        }
    }

    return (
        <Form style={{
            backgroundColor: '#fafafa',
            display: 'flex', justifyContent: 'center',
            flexDirection: 'column',
            padding: 10,
            width:'inherit',
            position: 'fixed',            
            zIndex: 1
        }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Label>Create a new project</Form.Label>
            </div>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Project name" onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </Form.Group>
            <Button variant="primary" onClick={createProject}>
                Create Project
            </Button>
        </Form>
    )
}
export default NewProject;