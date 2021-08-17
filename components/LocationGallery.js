import {useState, useReducer} from 'react';
import LocationCard from "./LocationCard";
import CityMap from "./CityMap";

const locationGallery = ({locations, city}) => {

    return (
        <div className="location-gallery">
            <div className="gallery-wrapper">
                <h4 className="gallery-label">Bekijk alle {locations.length} locaties in</h4>
                <h1 className="gallery-title">{city.city}</h1>

                {(locations && locations.length > 0) &&
                <div className="gallery">
                    {locations.map((location) => (
                        <LocationCard location={location} title={location.Naam} key={`location-${location.id}`} />
                    ))}
                </div>
                }
            </div>

            <div className="map">
                <CityMap city={city} locations={locations} />
            </div>
        </div>

    )
};


export default locationGallery;