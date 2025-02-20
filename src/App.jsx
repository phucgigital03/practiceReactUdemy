import { useForm } from 'react-hook-form'
import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  return (
    <div className='p-4 bg-white min-h-screen dark:bg-black dark:text-white'>
      <DarkModeToggle/>
      <h1 className='text-2xl'>Hello Dark Mode apply with tailwind csss</h1>
    </div>
  )
}

export default App
