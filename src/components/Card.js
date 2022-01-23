export default function Card (props) {
    return (
        <div className="card-container">
            <img className="card-img" src={`../images/${props.entry.img}`} alt="some place" />
            <div className="card-info">
                <div className="location-info">
                    <img className="location-icon" src="../images/location-icon.png" alt="icon" />
                    <span className="location">{props.entry.location}</span>
                    <a href={props.entry.maps} target="_blank" rel="noreferrer">
                        <span className="maps">View on Google Maps</span>
                    </a>
                </div>
                <h2>{props.entry.title}</h2>
                <h5>{props.entry.startDate} + {props.entry.endDate}</h5>
                <p>{props.entry.description}</p>
            </div>
        </div>
    )
}