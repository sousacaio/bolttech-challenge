import DetailedProject from './DetailedProject'

const Projects = ({ projects }) => {

    const hasMessage = projects?.message
    const hasProjects = Array.isArray(projects)

    return (
        <div style={{ width: '100%', marginBottom: 80 }}>
            {!hasProjects ?
                (<div> {hasMessage} </div>) :
                (<>{projects.map((project, index) => {
                    return <DetailedProject project={project} key={index} />
                }
                )}</>)}
        </div >
    )
}

export default Projects;