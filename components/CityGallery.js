import {useState, useReducer} from 'react';
import CityCard from "./CityCard";
import Link from 'next/link'

const cityGallery = ({cities}) => {
    const [locationsArray, setLocationsArray] = useState(cities);

    return (
        <div className="gallery">
            {(cities && cities.length > 0) &&
            <ul>
                {cities.map((post) => (
                    <CityCard title={post} />
                ))}
            </ul>
            }
        </div>
    )
};


export default cityGallery;