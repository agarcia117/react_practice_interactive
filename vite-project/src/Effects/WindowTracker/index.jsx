import { useState } from "react"
import WindowTracker from "./WindowTracker.jsx"

function Page() {

  const [show, setShow] = useState(true);

    return (
        <>
          <button onClick={() => setShow(prev => !prev)} className='container'>
            Toggle WindowTracker
          </button>
          {show && <WindowTracker/>}
        </>
    )
}

export default Page