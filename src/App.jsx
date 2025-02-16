import './App.css'

function App() {
  const name = "Nguyen Quoc Phuc";
  const profession = "Full stack Developer";
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
    <div className='App'>
      {/* Header section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About section */}
      <section id='about' className='aboutSection'>
        <h2>About me</h2>
        <p>I&apos;m {name}, a passionate {profession}, i love building websites for real world user problems</p>
      </section>

      {/* Project section */}
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

      {/* Contact section */}
      <section id='contact' className='contactSection'>
      <h2>Contact me</h2>
      <p>my email <a className='emailContact' href='mailto:phucnguyen'>phucnguyendigital2003@gmail.com</a></p>
      </section>

      {/* Footer section */}
      <footer className='footer'>
          <p>Copyright 2025</p>
      </footer>
    </div>
  )
}

export default App
