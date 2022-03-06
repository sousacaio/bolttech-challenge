const DetailedTasksToDo = ({ tasks }) => {

    let tasksToDo = tasks.filter((task) => task.status === false)
    const hasTasks = tasksToDo?.length > 0
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {hasTasks ? tasksToDo.map((task, index) => (
                <div style={{ margin: 5, padding: 2 }}>
                    <input type="checkbox" key={index} value={task.title} checked={task.status} />
                    <label>{task.title}</label>
                </div>
            )) :
                <div style={{ margin: 5, padding: 2 }}>
                    No tasks yet
                </div>
            }
        </div>
    )
}

export default DetailedTasksToDo;