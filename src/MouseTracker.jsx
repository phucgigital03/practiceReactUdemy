import { useEffect, useState } from "react"



function MouseTracker() {

    const [position,setPosition] = useState({x: 0, y: 0})

    useEffect(()=>{
        const handleSetPosition = (e)=>{
            setPosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener("mousemove",handleSetPosition);
        console.log("mouse move added")

        return ()=>{
            window.removeEventListener("mousemove",handleSetPosition);
            console.log("mouse move removed")
        }
    },[])


  return (
    <div>
        <h3>Mouse Tracker</h3>
        <p>X: {position.x}, Y: {position.y}</p>
    </div>
  )
}

export default MouseTracker