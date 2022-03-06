const Projects = ({ projects }) => {

    const hasMessage = projects?.message
    const hasProjects = Array.isArray(projects)

    return (
        <div>
            {!hasProjects ?
                (<div> {hasMessage} </div>) :
                (<>{JSON.stringify(projects)}</>)}
        </div>
    )
}

export default Projects;