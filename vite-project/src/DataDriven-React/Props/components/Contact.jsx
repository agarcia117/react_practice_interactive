import phoneIcon from "../images/phone-icon.png"
import mailIcon from "../images/mail-icon.png"

function Contact({img, name, phoneNumber, email}){
  return(
    <>
      <article className="contact-card">
        <img 
            src={img}
            alt={`Photo of ${name}`}
        />
        <h3>{name}</h3>
        <div className="info-group">
            <img 
                src={phoneIcon}
                alt="phone icon" 
            />
            <p>{phoneNumber}</p>
        </div>
        <div className="info-group">
            <img 
                src={mailIcon}
                alt="mail icon"
            />
            <p>{email}</p>
        </div>
      </article>
    </>
  )
}

export default Contact