import {useState} from 'react';

const locationButton = () => {
    const [location, setLocation] = useState(null);
    const [hasLocation, setLocated] = useState(false);

    function fetchLocation() {
        if('geolocation' in navigator) {
            /* geolocation is available */

            let options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                let crd = pos.coords;

                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);

                setLocation([crd.latitude, crd.longitude]);
                setLocated(true);
            }

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                setLocated(false);
            }

            navigator.geolocation.getCurrentPosition(success, error, options);

        } else {
            /* geolocation IS NOT available */
            console.log('location not available');
        }

    }

    return (
        <button className="location-button" onClick={fetchLocation}>Vind locaties bij mij in de buurt</button>
    )
};

export default locationButton;