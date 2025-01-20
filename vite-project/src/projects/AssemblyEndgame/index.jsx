import { useState } from "react"
import { languages } from "./languages"
import { clsx } from "clsx";
import {getFarewellText} from "./utils"

function Page() {

  const [currentWord, setCurrentWord] = useState('react'.toLowerCase());
  const [guesses, setGuesses] = useState([]);
  
  const wrongGuessCount =  guesses.reduce((accumulator, letter) => {
    if(!currentWord.includes(letter)){
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = (guesses.length - wrongGuessCount) >= currentWord.length;
  const isGameOver = isGameWon || isGameLost;
  const isLastGuessIncorrect = guesses.length > 0 && !currentWord.includes(guesses[guesses.length - 1]);
  const statusClassName = clsx("status-container", isLastGuessIncorrect && !isGameOver && "wrong" , isGameWon && "won", isGameLost && "lost")

  
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languagesElements = languages.map((languageObj, index) => {
    const styles = {
      backgroundColor: languageObj.backgroundColor,
      color: languageObj.color
    }
    return  <span 
              className={index < wrongGuessCount ? "lost": ""} 
              style={styles} 
              key={languageObj.name}
            >
              {languageObj.name}
            </span>;
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
    
    return <button className={className} 
                   onClick={() => addToGuess(letter)} 
                   key={letter} 
                   disabled={isGameOver || guesses.includes(letter)} 
                   aria-disabled={guesses.includes(letter)}
                   aria-label={`Letter ${letter}`}
            >
              {letter.toUpperCase()}
            </button>
  });

  function addToGuess(letter){
    setGuesses(prevGuess =>
      prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter]
    )
  }

  function renderGameStatus(){
    if(!isGameOver && isLastGuessIncorrect){
      return <h1>{getFarewellText(languages[wrongGuessCount - 1].name)}</h1>;
    }

    if(isGameWon){
      return (
        <>
          <h1>You Win!</h1>
          <p>Well done! &#127882;</p>
        </>
      )
    }else if(isGameLost){
      return(
        <>
          <h1>Game over!</h1>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }
  }

  function resetGame(){
    setGuesses([]);
  }
  
  return (
      <>
        <main>
          <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under 8 attempts to keep the programming world safe from assembly!</p>
          </header>
          <section aria-live="polite" role="status" className={statusClassName}>
            {renderGameStatus()}
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
          {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
        </main>
      </>
  )
}

export default Page