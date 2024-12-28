import React  from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

function Page() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
      setContact(prevContact => {
        return {...prevContact, isFavorite : !prevContact.isFavorite}
      })
  }
  
  
  return (
      <>
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={!contact.isFavorite ? "Add to favorites" : "Remove from favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={contact.isFavorite ? "Filled Star Icon" : "Empty Star Icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
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





// const [myFavoriteThings, setMyFavoriteThings] = useState([]);
    
// //const myFavoriteThings = []
// const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
// "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
// const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

// function addFavoriteThing() {
//   setMyFavoriteThings(prev => [...prev, allFavoriteThings[prev.length]])
// }
{/* <main>
          <button onClick={addFavoriteThing}>Add item</button>
          <section aria-live="polite">
            {thingsElements}
          </section>
        </main> */}