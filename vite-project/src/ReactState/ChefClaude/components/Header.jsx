import chefClaudeIcon from "../images/chef-claude-icon.png"

function Header() {
  return(
      <header className="header">
          <img src={chefClaudeIcon} className="header-icon" alt="React Logo"/>
          <h1 className="header-title">Chef Claude</h1>
      </header>
  )
}

export default Header