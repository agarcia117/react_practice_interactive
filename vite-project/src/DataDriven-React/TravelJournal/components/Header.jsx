import globeIcon from "../../../assets/globe.png"

function Header(){
  return(
    <>
      <header className="header-banner">
        <img src={globeIcon} className="globe-icon" alt="Globe Icon" />
        <span className="header-title">my travel journal.</span>
      </header> 
    </>
  )
}

export default Header