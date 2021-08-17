import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';

const CityMap = ({locations, city}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    let longitude = city.longitude ? city.longitude : 52.370216;
    let latitude = city.latitude ? city.latitude : 4.895168;
    const [zoom] = useState(11);

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            // TODO: Exchange for free tile server
            style: 'https://vk-tiles.nl/styles/positron/style.json',
            center: [longitude, latitude],
            zoom: zoom
        });

        let nav = new maplibregl.NavigationControl();
        map.current.addControl(nav, 'bottom-left');

        if(locations && locations.length > 0) {
            locations.forEach(location => {
                let type;
                if(location.type && location.type.type) {
                    type = location.type.type.toLowerCase();
                }

                if(location && location.latitude && location.longitude) {
                    // Set up marker
                    let marker = document.createElement('div');
                    let icon = document.createElement('div');
                    icon.classList.add('icon');
                    marker.appendChild(icon);
                    marker.classList.add(type, 'map-marker');

                    // Set up popup
                    let popup = `<div class="popup"><h3 class="popup-title">${location.Naam}</h3><a class="button button-primary popup-button" href="/locaties/${location.slug}">Bekijk locatie</a></div>`

                    new maplibregl.Marker(marker)
                        .setLngLat([location.longitude, location.latitude])
                        .setPopup(new maplibregl.Popup().setHTML(popup))
                        .addTo(map.current);
                }
            })
        }


    });

    return (
        <div className="map-wrapper city-map">
            <div className="map" ref={mapContainer} />
        </div>
    )
}

export default CityMap;