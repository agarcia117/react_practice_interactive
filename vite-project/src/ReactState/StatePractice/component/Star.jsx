import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"
function Star(props) {

  return(
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={!props.isFilled ? "Add to favorites" : "Remove from favorites"}
      className="favorite-button"
    >
      <img
          src={props.isFilled ? starFilled : starEmpty}
          alt={props.isFilled ? "Filled Star Icon" : "Empty Star Icon"}
          className="favorite"
      />
    </button>
  )
}

export default Star