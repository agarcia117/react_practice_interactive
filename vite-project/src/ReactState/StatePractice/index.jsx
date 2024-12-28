import { useState } from "react"

function Page() {

  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
    
  //const myFavoriteThings = []
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(prev => [...prev, allFavoriteThings[prev.length]])
  }
  
  return (
      <>
        <main>
          <button onClick={addFavoriteThing}>Add item</button>
          <section aria-live="polite">
            {thingsElements}
          </section>
        </main>
      </>
  )
}

export default Page



// const [count, setCount] = useState(0);

// function decrementCount(){
//   setCount(prevCount => prevCount - 1);
// }

// function incrementCount(){
//   setCount(prevCount => prevCount + 1);
// }
{/* <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={decrementCount} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={incrementCount} className="plus" aria-label="Increase count">+</button>
            </div>
          </main> */}







// const [isGoingOut, setIsGoingOut] = useState(false);
  
// function flipAnswer(){
//   setIsGoingOut(prevBoolean => !prevBoolean);
// }
// <main>
//   <h1 className="title">Do I feel like going out tonight?</h1>
//   <button onClick={flipAnswer} className="value" aria-label={`Current Answer is ${isGoingOut ? "Yes":"No"}. Click to change it.`}>{isGoingOut ? "Yes":"No"}</button>
// </main>