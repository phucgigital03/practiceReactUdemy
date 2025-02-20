import { useEffect, useState } from "react"



function DarkModeToggle() {
    const [isDarkMode,setDarkMode] = useState(()=>{
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light')
        }
    },[isDarkMode])

  return (
    <button 
        className="p-2 dark:bg-white dark:text-cyan-200 bg-gray-200 text-gray-800 rounded"
        onClick={()=> setDarkMode(prev => !prev)}
    >
        Dark Mode
    </button>
  )
}

export default DarkModeToggle
