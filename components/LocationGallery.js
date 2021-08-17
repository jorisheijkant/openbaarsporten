import {useState, useReducer} from 'react';
import LocationCard from "./LocationCard";
import CityMap from "./CityMap";

const sliceLocations = (state, action) => {
    return state.slice(0,3);
}

const locationGallery = ({locations}) => {
    const [locationsArray, setLocationsArray] = useState(locations);

    const [locationCards, setLocationCards] = useReducer(sliceLocations, locations.slice(0,3));

    return (
        <div className="location-gallery">
            <div className="gallery-wrapper">
                <h4 className="gallery-label">Bekijk alle {locations.length} locaties in</h4>
                <h1 className="gallery-title">Amsterdam</h1>

                {(locationCards && locationCards.length > 0) &&
                <div className="gallery">
                    {locations.map((location) => (
                        <LocationCard location={location} title={location.LABEL} />
                    ))}
                </div>
                }
            </div>

            <div className="map">
                <CityMap />
            </div>
        </div>

    )
};


export default locationGallery;