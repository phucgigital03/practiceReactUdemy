
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div 
        className='bg-slate-400 flex flex-col items-center justify-center min-h-screen space-y-4'
    >
        <h1 className='text-center mx-auto'>Home page</h1>
        <p className='text-center'>Welcome to home page</p>

        <div>
            <ul>
                <li className='hover:text-yellow-400'>
                    <Link to="/about/team">Our team</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Home