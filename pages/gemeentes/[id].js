import Head from 'next/head';
import LocationGallery from "../../components/LocationGallery";
import TopNav from "../../components/TopNav";

import { fetchAPI } from "../../lib/api";
import { withRouter } from 'next/router';

const Home = ({locations, city}) => {
    return (
        <div className="container">
            <Head>
                <title>Openbaar sporten</title>
                <meta name="description" content="Openbaar sporten"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href='https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css' rel='stylesheet' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <TopNav />

            <main className="main">
                <LocationGallery city={city} locations={locations} county="Amsterdam" />
            </main>
        </div>
    )
}

export async function getStaticProps(context) {
    // STRAPI FETCH
    const citySlug = context.params.id;
    const city = await fetchAPI(`/cities?slug=${citySlug}`);
    const locations = await fetchAPI(`/locations?cities.slug=${citySlug}`);

    return {
        props: {
            city: city[0],
            locations: locations
        },
    }
}

//TO DO: make this dynamic
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: 'amsterdam' } },
            { params: { id: 'rotterdam' } },
            { params: { id: 'eindhoven' } }
        ],
        fallback: true
    };
}

export default Home;