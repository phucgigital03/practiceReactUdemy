import { useForm } from 'react-hook-form'
import './App.css'
import DarkModeToggle from './DarkModeToggle'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import Team from './Team'
import Counter from './Counter'
import DisPlay from './DisPlay'

function App() {
  return (
      <Router>
        <h1 className='text-3xl'>Test Redux</h1>
        <Counter/>
        <DisPlay/>

        <div className='min-h-screen'>
          <nav className='bg-blue-400 text-black'>
            <ul className='flex justify-center gap-4 h-px-200 p-2'>
              <li className='hover:text-yellow-400'>
                <Link to="/">Home</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link to="/about">About</Link>
              </li>
              <li className='hover:text-yellow-400'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}>
              <Route path='team' element={<Team/>}/>
            </Route>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
      </Router>
  )
}

export default App
