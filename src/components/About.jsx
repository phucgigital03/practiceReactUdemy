

function About(){
    const name = "Nguyen Quoc Phuc";
    const profession = "Full stack Developer";
    return (
        <section id='about' className='aboutSection'>
        <h2>About me</h2>
        <p>I&apos;m {name}, a passionate {profession}, i love building websites for real world user problems</p>
      </section>
    )
}

export default About