import { useState } from "react";

function Joke({setup, punchline}){

  const [isShown, setIsShown] = useState(false);

  function toggleIsShown(){
    setIsShown(prev => !prev);    
  }

  return(
    <>
      <article className="Joke-card">
        {setup && <h1>{setup}</h1>}
        {isShown && <span>{punchline}</span>}
      </article>

      <button onClick={toggleIsShown}>{`Show Punchline`}</button>
      <hr></hr>
    </>
  )
}

export default Joke