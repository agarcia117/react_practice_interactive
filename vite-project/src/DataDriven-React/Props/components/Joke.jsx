function Joke({setup, punchline}){
  return(
    <>
      <article className="Joke-card">
        {setup && <h1>{setup}</h1>}
        <span>{punchline}</span>
      </article>
      <hr></hr>
    </>
  )
}

export default Joke