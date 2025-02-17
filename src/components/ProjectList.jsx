
export default function ProjectList() {
    const projects = [
        {
          title: "Project One",
          description: "A web app build with React",
          link: "#"
        },
        {
          title: "Project Two",
          description: "A web app build with Nodejs",
          link: "#"
        },
        {
          title: "Project Three",
          description: "A web app build with Spring Boot",
          link: "#"
        },
    ]

  return (
    <section id='projects' className='projectsSection'>
        <h2>Projects</h2>
        <div className='project-list'>
          {projects.map((project,index)=>{
            return <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href={project.link} target='_blank'>View project</a>
            </div>
          })}
        </div>
      </section>
  )
}
