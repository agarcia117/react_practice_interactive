//import Count from "./component/Count.jsx"
//import Star from "./component/Star.jsx"
import { useState } from "react";
//import avatar from "./images/user.png"
import Header from "./component/Header.jsx"
import Body from "./component/Body.jsx"




function Page() {
  const [userName, setUserName] = useState("Alan");

  return (
      <>
        <Header name={userName} />
        <Body name={userName}/>
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
  <div className="counter">
      <button onClick={decrementCount} className="minus" aria-label="Decrease count">–</button>
      <Count number={count}/>
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




// const [contact, setContact] = useState({
//   firstName: "John",
//   lastName: "Doe",
//   phone: "+1 (212) 555-1212",
//   email: "itsmyrealname@example.com",
//   isFavorite: false
// });
// function toggleFavorite() {
//     setContact(prevContact => {
//       return {...prevContact, isFavorite : !prevContact.isFavorite}
//     })
// }
// <main>
//   <article className="card">
//       <img
//           src={avatar}
//           className="avatar"
//           alt="User profile picture of John Doe"
//       />
//       <div className="info">
//           <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
//           <h2 className="name">
//               {`${contact.firstName} ${contact.lastName}`}
//           </h2>
//           <p className="contact">{contact.phone}</p>
//           <p className="contact">{contact.email}</p>
//       </div>
//   </article>
// </main>







// function signUp(formData){
//   const data = Object.fromEntries(formData);
//   const dietaryRestrictions = formData.getAll("dietaryRestrictions");
//   const allData = {
//     ...data,
//     dietaryRestrictions
//   }
//   console.log(allData);
// }
{/* <section>
          <h1>Signup form</h1>
          <form action={signUp}>
            <label htmlFor="email">Email:</label>
            <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

            <label htmlFor="password">Password:</label>
            <input id="password" defaultValue="password123" type="password" name="password" />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" defaultValue="This is a description"></textarea>

            <fieldset>
              <legend>Employment Status:</legend>
              <label>
                <input type="radio" name="employmentStatus" value="unemployed" />
                Unemployed
            </label>
              <label>
                <input type="radio" name="employmentStatus" value="part-time"/>
                Part-time
            </label>
              <label>
                <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"/>
                Full-time
            </label>
            </fieldset>
            
            <fieldset>
              <legend>Dietary restrictions:</legend>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                Kosher
            </label>
              <label>
                <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                Vegan
            </label>
              <label>
                <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                Gluten-free
            </label>
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <select id="favColor" name="favColor" defaultValue="" required>
              <option value="" disabled>-- Choose a color --</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
            </select>
            
            <button>Submit</button>
            
          </form>
        </section> */}