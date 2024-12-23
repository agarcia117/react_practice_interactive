// import globeIcon from "../../../assets/globe.png"
import markerIcon from "../../../assets/marker.png"
import mountFuji from "../../../assets/Mount-Fuji.png"

function Entry(){
  return(
    <>
      <div className="entry">
        <div className="location-image-container">
          <img src={mountFuji} className="location-image" alt="Mount Fuji" />
        </div>
        <div className="location-info-container">
          <div className="location-header">
            <img src={markerIcon} className="marker-icon" alt="Marker Icon" />
            <span className="country-name">JAPAN</span>
            <span className="google-maps-text"><a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a></span>
          </div>
          <div className="location-info-main">
            <span className="location-name">Mount Fuji</span>
            <span className="date">12 Jan, 2021 - 24 Jan, 2021</span>
            <span className="location-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</span>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Entry