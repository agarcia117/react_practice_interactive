import React  from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

function Page() {
  
  function signUp(formData){
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
    
  }
  
  return (
      <>
        <section>
          <h1>Signup form</h1>
          <form action={signUp}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
            <br />
            
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password"/>
            <br />

            <button>Submit</button>
            
          </form>
        </section>
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




  

// const [contact, setContact] = React.useState({
//   firstName: "John",
//   lastName: "Doe",
//   phone: "+1 (212) 555-1212",
//   email: "itsmyrealname@example.com",
//   isFavorite: false
// })

// function toggleFavorite() {
//     setContact(prevContact => {
//       return {...prevContact, isFavorite : !prevContact.isFavorite}
//     })
// }
{/* <main>
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
</main> */}