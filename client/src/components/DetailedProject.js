import DetailedTasksToDo from "./DetailedTasksToDo"
import DetailedTasksDone from "./DetailedTasksDone"
const DetailedProject = ({ project }) => {
    return (
        <div style={{
            border: 'solid #d9d9d9',
            borderWidth: 2,
            borderColor: '#d9d9d9',
            width: 'auto',
            padding: 'auto'
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fafafa', justifyContent: 'space-between' }}>
                <div style={{ alignSelf: 'flex-start', margin: 5, justifyContent: 'center' }}>
                    <p>{project.name}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div style={{ margin: 5, justifyContent: 'center' }}>
                        <p>Edit</p>
                    </div>
                    <div style={{ margin: 5, justifyContent: 'center' }}>
                        <p>Delete</p> </div>
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

export default DetailedProject;