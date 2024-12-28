import chefClaudeIcon from "../images/chef-claude-icon.png"

function Header() {
  function handleMouseOver(){
    console.log("image clicked.");
  } 

  return(
      <header className="header">
          <img src={chefClaudeIcon} className="header-icon" alt="React Logo" onMouseOver={handleMouseOver}/>
          <h1 className="header-title">Chef Claude</h1>
      </header>
  )
}

export default Header