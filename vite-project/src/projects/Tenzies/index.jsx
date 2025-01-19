import Die from "./components/Die.jsx"
import { useState } from "react"
import {nanoid} from "nanoid"

function Page() {
  const [dice, setDice] = useState(generateAllNewDie());

  if(dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)){
    console.log("Game is Over");
  }

  function generateAllNewDie() {
    let diceArray = [];

    for(let i = 0; i < 10; i++){
      diceArray.push({value: Math.ceil(Math.random() * 6), isHeld:false, id: nanoid()})
    }      
    return diceArray;
  }

  function rerollDice(){
    setDice(prevDice => prevDice.map(diceObj =>{
      return diceObj.isHeld ?  diceObj: {...diceObj, value: Math.ceil(Math.random() * 6)};
    }))
  }

  function hold(id){
    setDice(prevDice => prevDice.map(diceObj =>{
      return diceObj.id === id ? {...diceObj, isHeld:!diceObj.isHeld} : diceObj;
    }))
  }
  
  let diceElements = dice.map((dieObject) => {
    return <Die 
                key={dieObject.id} 
                id={dieObject.id} 
                value={dieObject.value} 
                isHeld={dieObject.isHeld} 
                hold={hold}/>
  }); 

  return (
      <>
        <main>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="container">
            {diceElements}
          </div>

          <button onClick={rerollDice} className="roll-button">Roll</button>
        </main>
      </>
  )
}

export default Page