import DetailedTasksToDo from "./DetailedTasksToDo"
import DetailedTasksDone from "./DetailedTasksDone"
import DeleteProjectService from '../services/delete-project.service'
import { BsTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteProjectFromStore } from '../store/projects'

const DetailedProject = ({ project }) => {

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
            marginBottom:20           
        }}>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fafafa', justifyContent: 'space-between' }}>
                <div style={{ alignSelf: 'flex-start', margin: 5, justifyContent: 'center' }}>
                    <p>{project.name}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div style={{ margin: 5, justifyContent: 'center' }}>
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

export default DetailedProject;