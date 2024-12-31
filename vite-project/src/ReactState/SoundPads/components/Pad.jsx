import { useState } from "react"

function Pad(props) {
  const styles = {
    backgroundColor: props.color,
  }
  
  //const [onState, setOnState] = useState(props.on);
  
  return(
    <button style={styles} className={props.on ? "on" : undefined} onClick={(event) => props.toggle(props.id)}></button>
  )
}

export default Pad