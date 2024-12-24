import Joke from "./components/Joke.jsx"

function App() {
  return(
    <>
      <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it."/>
      <Joke setup="How did the hacker escape the police?"  punchline="How did the hacker escape the police?"/>
      <Joke setup="Why don't pirates travel on mountain roads?" punchline="Scurvy."/>
      <Joke setup="Why do bees stay in the hive in the winter?" punchline="Swarm."/>
      <Joke punchline="I don't know, but the flag is a big plus!"/>
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