import { useState } from "react"
import MouseTracker from "./MouseTracker";



function ParentComponent() {
    const [showComponent,setShowComponent] = useState(true);

    const handleToggle = () => {
        setShowComponent((prev) => !prev)
    }

  return (
    <div>
        <h1>ParentComponent</h1>
        <button onClick={handleToggle}>Toggle Component</button>
        <p>{showComponent ? "mounted" : "unmounted"}</p>

        {showComponent && <MouseTracker/>}
    </div>
  )
}

export default ParentComponent