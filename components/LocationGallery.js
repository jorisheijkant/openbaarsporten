import {useState, useReducer} from 'react';
import LocationCard from "./LocationCard";

const sliceLocations = (state, action) => {
    return state.slice(0,3);
}

const locationGallery = ({locations}) => {
    const [locationsArray, setLocationsArray] = useState(locations);

    const [locationCards, setLocationCards] = useReducer(sliceLocations, locations.slice(0,3));

    return (
        <div className="gallery">
            {(locationCards && locationCards.length > 0) &&
                <ul>
                    {locationCards.map((post) => (
                        <LocationCard title={post.LABEL} latlong={[post.LNGMAX, post.LATMAX]} />
                    ))}
                </ul>
            }
        </div>
    )
};


export default locationGallery;