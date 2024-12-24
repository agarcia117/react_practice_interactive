import markerIcon from "../../../assets/marker.png"

function Entry(props){
  return(
    <>
      <div className="entry">
        <div className="location-image-container">
          <img src={props.img.src} className="location-image" alt={props.img.alt} />
        </div>
        <div className="location-info-container">
          <div className="location-header">
            <img src={markerIcon} className="marker-icon" alt="Marker Icon" />
            <span className="country-name">{props.country.toUpperCase()}</span>
            <span className="google-maps-text"><a href={props.googleMapsLink}>View on Google Maps</a></span>
          </div>
          <div className="location-info-main">
            <span className="location-name">{props.title}</span>
            <span className="date">{props.dates}</span>
            <span className="location-description">{props.text}</span>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Entry