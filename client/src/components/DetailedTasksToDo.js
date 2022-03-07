import { Form, Button, Modal } from 'react-bootstrap'
import StatusTaskService from '../services/status-task.service'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/projects'
import { useState } from 'react';
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'
import EditTaskService from '../services/edit-task.service'
import DeleteTaskService from '../services/delete-task.service'
import { format } from 'date-fns'

const DetailedTasksToDo = ({ tasks, projectId }) => {

    let tasksToDo = tasks.filter((task) => task.status === false)
    const hasTasks = tasksToDo?.length > 0

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            {hasTasks ? tasksToDo.map((task, index) => {
                return <Task task={task} key={index} projectId={projectId} />
            }) :
                <div style={{ margin: 5, padding: 2 }}>
                    No tasks done yet
                </div>
            }
        </div>
    )
}

const Task = (props) => {

    let dispatch = useDispatch()

    let changeTaskStatus = async () => {
        const changeStatus = new StatusTaskService()
        let { status, data } = await changeStatus.handle(props.projectId, props.task._id)
        if (status === 200) {
            dispatch(addTask(data))
        }
    }

    let deleteTask = async () => {
        const deletion = new DeleteTaskService()
        let { status, data } = await deletion.handle(props.projectId, props.task._id)
        if (status === 200) {
            dispatch(addTask(data))
        }

    }

    const [modalShow, setModalShow] = useState(false);
    const [isShown, setIsShown] = useState(false);


    return (
        <div className="mb-3"
            style={{ display: 'flex', flexDirection: 'row' }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <Form.Check
                type="checkbox"
                label={props.task.title}
                onChange={() => changeTaskStatus()}
                checked={false}
                readOnly={false}
            />
            <EditTaskTitleModal
                show={modalShow}
                _id={props.task._id}
                project_id={props.projectId}
                onHide={() => setModalShow(false)}
            />

            {isShown && (
                <div style={{ marginLeft: 10, display: 'flex' }}>
                    <div onClick={() => setModalShow(true)}>
                        <BsFillPencilFill color="#3b6fba" />
                    </div>
                    <div style={{ marginLeft: 10 }} onClick={() => deleteTask()}>
                        <BsTrashFill color="#3b6fba" />
                    </div>
                    <div style={{ marginLeft: 10 }} onClick={() => deleteTask()}>
                        Created at {format(new Date(props.task.createdAt), 'dd/MM/yyyy')}
                    </div>
                </div>)}
        </div>)
}

function EditTaskTitleModal(props) {

    let dispatch = useDispatch()

    const [title, setTitle] = useState('')

    let editTitle = async () => {


        if (!title) {
            alert('The task title is required')
            return
        }

        const edit = new EditTaskService()

        let { status, data } = await edit.handle(props.project_id, title, props._id)

        if (status === 200) {
            dispatch(addTask(data))
        }

        setTitle('')
        props.onHide()
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
                    Edit task title? {props._id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{
                    backgroundColor: '#fafafa',
                    display: 'flex', justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="New task title" onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={editTitle}>
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

export default DetailedTasksToDo;