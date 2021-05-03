import Image from "next/image";

const locationCard = ({title, latlong}) => {
    return (
        <div className="location-card">
            <Image src="/img/placeholder.jpg"
                   width={200}
                   height={200} />
            <div className="card-content">
                <h2>{title}</h2>
            </div>
        </div>
    )
};

export default locationCard;