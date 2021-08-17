import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

const CityMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(139.753);
    const [lat] = useState(35.6844);
    const [zoom] = useState(14);

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            // TODO: Exchange for free tile server
            style: 'https://vk-tiles.nl/styles/positron/style.json',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div className="map-wrap city-map">
            <div className="map" ref={mapContainer} />
        </div>
    )
}

export default CityMap;