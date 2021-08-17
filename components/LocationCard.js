import Image from "next/image";

const locationCard = ({location, title}) => {
    return (
        <div className="location-card">
            <div className="location-card-image">
                <Image className="image" src="/img/placeholder.jpg" layout="fill" />
            </div>

            <div className="card-content">
                <h4 className="card-label">{location.type}</h4>
                <h2 className="card-title">{title}</h2>
                <hr className="card-hr" />
                <p className="card-description">Mooi gelegen skatepark. Enkele halfpipes en boxes, maar ook geschikt voor beginnende skaters.</p>
            </div>
        </div>
    )
};

export default locationCard;