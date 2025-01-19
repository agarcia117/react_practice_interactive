import {useState } from "react"

function Page() {
  
  return (
      <>
        <main>
            <header>
              <h1>Assembly: Endgame</h1>
              <p>Guess the word in under 8 attempts to keep the programming world safe from assembly!</p>
            </header>
            <section className="status-container">
              <h1>You Win!</h1>
              <p>Well done! &#127881;</p>
            </section>
          
        </main>
      </>
  )
}

export default Page