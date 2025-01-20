import { useState } from "react"
import { languages } from "./languages"
import { clsx } from "clsx";

function Page() {

  const [currentWord, setCurrentWord] = useState('react'.toLowerCase());
  const [guesses, setGuesses] = useState([]);
  console.log(guesses);
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languagesElements = languages.map(languageObj => {
    const styles = {
      backgroundColor: languageObj.backgroundColor,
      color: languageObj.color
    }
    return <span style={styles} key={languageObj.name}>{languageObj.name}</span>;
  });

  const letterElements = currentWord.split('').map((letter, index) => {
    return <span key={index}>{guesses.includes(letter) ? letter.toUpperCase() : ''}</span>
  });

  const keyboardElements = alphabet.split('').map(letter => {
    const isGuessed = guesses.includes(letter);
    const isCorrect = currentWord.includes(letter) && isGuessed;
    const isWrong = !currentWord.includes(letter) && isGuessed;
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    });
    
    return <button className={className} onClick={() => addToGuess(letter)} key={letter}>{letter.toUpperCase()}</button>
  });

  function addToGuess(letter){
    setGuesses(prevGuess =>
      prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter]
    )
  }
  
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

          <section className="languages-container">
            {languagesElements}
          </section>

          <section className="letters-container">
            {letterElements}
          </section>

          <section className="keyboard-container">
            {keyboardElements}
          </section>
          <button className="new-game">New Game</button>
        </main>
      </>
  )
}

export default Page