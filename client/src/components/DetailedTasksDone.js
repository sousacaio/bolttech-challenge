import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { format } from 'date-fns'

const DetailedTasksToDo = ({ tasks, projectId }) => {

    let tasksToDo = tasks.filter((task) => task.status === true)
    const hasTasks = tasksToDo?.length > 0
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
            {hasTasks ? tasksToDo.map((task, index) => {
                return <FinishedTasks task={task} key={index} projectId={projectId} />
            }) :
                <div style={{ margin: 5, padding: 2 }}>
                    No tasks yet
                </div>
            }
        </div>
    )
}
const FinishedTasks = (props) => {

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
                checked={true}
                readOnly={true}
            />
            {isShown && (
                <div style={{ marginLeft: 10, display: 'flex' }}>
                    Finished at {format(new Date(props.task.terminationDate), 'dd/MM/yyyy')}
                </div>)}
        </div>)
}
export default DetailedTasksToDo;