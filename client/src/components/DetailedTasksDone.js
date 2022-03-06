const DetailedTasksToDo = ({ tasks }) => {

    let tasksDone = tasks.filter((task) => task.status === true)
    const hasTasks = tasksDone?.length > 0
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {hasTasks ? tasksDone.map((task, index) => (
                <div style={{ margin: 5, padding: 2 }}>
                    <input type="checkbox" key={index} value={task.title} checked={task.status} />
                    <label>{task.title}</label>
                </div>
            )) :
                <div style={{ margin: 5, padding: 2 }}>
                    There is no task finished yet
                </div>
            }
        </div>
    )
}

export default DetailedTasksToDo;