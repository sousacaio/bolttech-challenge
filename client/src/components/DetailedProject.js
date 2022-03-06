import DetailedTasksToDo from "./DetailedTasksToDo"
import DetailedTasksDone from "./DetailedTasksDone"
import DeleteProjectService from '../services/delete-project.service'
import EditProjectService from '../services/edit-project.service'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteProjectFromStore, editProject } from '../store/projects'
import { useState } from "react"
import { Modal, Button, Form } from 'react-bootstrap'

const DetailedProject = ({ project }) => {

    const [modalShow, setModalShow] = useState(false);

    let dispatch = useDispatch()

    let deleteProject = async (id) => {
        const deleteProject = new DeleteProjectService()
        let response = await deleteProject.handle(id)
        if (response.status === 200) {
            dispatch(deleteProjectFromStore({ _id: id }))
        }
    }

    return (
        <div style={{
            border: 'solid #d9d9d9',
            borderWidth: 2,
            borderColor: '#d9d9d9',
            width: 'auto',
            padding: 'auto',
            marginBottom: 20
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
                        <BsFillPencilFill />
                    </div>
                    <div style={{ margin: 5, justifyContent: 'center' }} onClick={(e) => deleteProject(project._id)}>
                        <BsTrashFill />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <div>To do</div>
                    <DetailedTasksToDo tasks={project.tasks} />
                </div>
                <div>
                    <div>Done</div>
                    <DetailedTasksDone tasks={project.tasks} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div>
                        <input type="text"></input>
                    </div>
                    <div>
                        <button title="Add">Add</button>
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