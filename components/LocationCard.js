import Image from "next/image";
import Link from 'next/link';

import { getStrapiMedia } from "../lib/media";

const locationCard = ({location, title}) => {
    let type;
    if(location.type && location.type.type) {
        type = location.type.type;
    }

    return (
        <div className="location-card">
            <div className="location-card-image">
                {location.photo &&
                    <Image className="image" src={getStrapiMedia(location.photo)} layout="fill" />
                }
            </div>

            <div className="card-content">
                <h4 className="card-label">{type}</h4>
                <h2 className="card-title">{title}</h2>
                <hr className="card-hr" />
                {location.Omschrijving &&
                    <p className="card-description">{location.Omschrijving}</p>
                }
                <Link href={`/locaties/${location.slug}`}>
                    <a className="button button-primary" >Lees meer</a>
                </Link>
            </div>
        </div>
    )
};

export default locationCard;