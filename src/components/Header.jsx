



function Header(){
    const name = "Nguyen Quoc Phuc";
    const profession = "Full stack Developer";
    return (
        <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
        </header>
    )
}

export default Header