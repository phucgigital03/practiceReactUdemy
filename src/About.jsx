
import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function About() {
  const [searchParams,setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic") || "general";
  // console.log(topic)

  const handleTopic = (newTopic)=>{
      setSearchParams(
        {
          topic: newTopic
        }
      )
  }

  return (
    <div>
      About

      <div className='mt-6'>
          <h3>Choose topic</h3>
          <div className='flex space-x-4 mt-4'>
            <button onClick={()=>{handleTopic("Team")}} className='py-4 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300'>
                Team
            </button>
            <button onClick={()=>{handleTopic("Mission")}} className='py-4 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300'>
                Mission
            </button>
            <button onClick={()=>{handleTopic("Vision")}} className='py-4 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300'>
                Vision
            </button>
          </div>
      </div>

      <div className=''>
        <p>Current topic: {topic}</p>
      </div>

      <div className='bg-slate-500'>
        <Outlet/>
      </div>
    </div>
  )
}

export default About