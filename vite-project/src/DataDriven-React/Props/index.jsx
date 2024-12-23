import Contact from "./components/Contact.jsx"

function App() {
  return(
    <>
      <div className="contacts">
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
      </div>
    </>
  )
}

export default App

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);