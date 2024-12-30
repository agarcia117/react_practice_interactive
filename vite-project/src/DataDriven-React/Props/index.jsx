import { useState } from "react";
import Joke from "./components/Joke.jsx"
import jokesData from "./jokesData.js"
function App() {

  const [unreadMessages, setUnreadMessages] = useState(["bruh"]);
  const message = unreadMessages.length === 1 ? "message" : "messages";
  return(
    <>
      
      {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread {message}!</h1>}
      {unreadMessages.length === 0 && <p>You're all caught up!</p>}
    </>
  )
}

export default App

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

{/* <div className="contacts">
        <Contact 
          img=".\src\DataDriven-React\Props\images\mr-whiskerson.png"
          name="Mr.Whickerson"
          phoneNumber="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"  
        />
        <Contact
          img=".\src\DataDriven-React\Props\images\fluffykins.png"
          name="Fluffykins"
          phoneNumber="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact 
          img=".\src\DataDriven-React\Props\images\felix.png"
          name="Felix"
          phoneNumber="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact 
          img=".\src\DataDriven-React\Props\images\pumpkin.png"
          name="Pumpkin"
          phoneNumber="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div> */}








// const jokeElements = jokesData.map(joke => {
//   return <Joke setup={joke.setup} punchline={joke.punchline} />;
// });
{/* <main>
        {jokeElements}
      </main> */}