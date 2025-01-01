import { useState } from "react";
import pads from "./pads";
import Pad from "./components/Pad.jsx"

function Page(props) {
  const [padsArr, setPadsArr] = useState(pads);

  const padsElement = padsArr.map(pad => {
    return <Pad color={pad.color} id={pad.id} key={pad.id} on={pad.on} toggle={toggle}/>
  });

  function toggle(id){
    
    setPadsArr(prevArr => {
      return prevArr.map(pad => {
        if(pad.id === id){
          return {...pad, on:!pad.on};
        }
        
        return pad;
      })
    });
  }
  

  return (
    <main>
        <div className="pad-container">
            {padsElement}
        </div>
    </main>
  )
}

export default Page