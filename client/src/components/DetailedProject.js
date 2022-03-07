import DetailedTasksToDo from "./DetailedTasksToDo"
import DetailedTasksDone from "./DetailedTasksDone"
import DeleteProjectService from '../services/delete-project.service'
import EditProjectService from '../services/edit-project.service'
import CreateTaskService from '../services/create-task.service'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteProjectFromStore, editProject, addTask } from '../store/projects'
import { useState } from "react"
import { Modal, Button, Form } from 'react-bootstrap'

const DetailedProject = ({ project }) => {

    const [modalShow, setModalShow] = useState(false);

    const [taskName, setTaskName] = useState('');

    let dispatch = useDispatch()

    let deleteProject = async (id) => {
        const deleteProject = new DeleteProjectService()
        let response = await deleteProject.handle(id)
        if (response.status === 200) {
            dispatch(deleteProjectFromStore({ _id: id }))
        }
    }

    let createTask = async (id) => {
        if(!taskName){
            alert('The name of the task is required')
            return
        }
        const create = new CreateTaskService()

        let response = await create.handle(id, taskName)

        if (response.status === 200) {
            dispatch(addTask(response.data))
            setTaskName('')
        }
    }

    return (
        <div style={{
            border: 'solid #d9d9d9',
            borderWidth: 2,
            borderColor: '#d9d9d9',
            width:'100%',
            marginBottom:5           
        }}>

            <MyVerticallyCenteredModal
                show={modalShow}
                _id={project._id}
                onHide={() => setModalShow(false)}
            />

            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fafafa', justifyContent: 'space-between' }}>
                <div style={{ alignSelf: 'flex-start', margin: 5, justifyContent: 'center' }}>
                    <p>{project.name}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div style={{ margin: 5, justifyContent: 'center' }} onClick={() => setModalShow(true)}>
                        <BsFillPencilFill color="#3b6fba" />
                    </div>
                    <div style={{ margin: 5, justifyContent: 'center' }} onClick={(e) => deleteProject(project._id)}>
                        <BsTrashFill color="#3b6fba" />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                <div>
                    <div>To do</div>
                    <DetailedTasksToDo tasks={project.tasks} projectId={project._id} />
                </div>
                <div>
                    <div>Done</div>
                    <DetailedTasksDone tasks={project.tasks} projectId={project._id} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Tasks"
                                onChange={(e) => setTaskName(e.target.value)}
                                value={taskName}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Button variant="success" onClick={(e) => createTask(project._id)}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

function MyVerticallyCenteredModal(props) {

    let dispatch = useDispatch()
    const [name, setName] = useState('')

    let editName = async () => {
        if (!name) {
            alert('The project name field is required')
            return
        }
        const edit = new EditProjectService()

        let { status } = await edit.handle(name, props._id)

        if (status === 200) {
            dispatch(editProject({ name, _id: props._id }))
            props.onHide()
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit project name? {props._id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{
                    backgroundColor: '#fafafa',
                    display: 'flex', justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="New project name" onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={editName}>
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailedProject;