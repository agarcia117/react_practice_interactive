import reactLogo from '../../Fragments/React-icon.png'

function Navbar(){
  return(
    <header className='header'>
      <nav className='header-nav'>
        <img src={reactLogo} className='header-icon' alt="React Logo" />
        <h1>ReactFacts</h1>
      </nav>
    </header>
  )
}

export default Navbar