import { Form, Button } from 'react-bootstrap'

const NewProject = () => {
    return (
        <Form style={{ backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Label>Create a new project</Form.Label>
            </div>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Project name" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Project
            </Button>
        </Form>
    )
}
export default NewProject;