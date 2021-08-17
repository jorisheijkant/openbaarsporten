import Head from 'next/head';
import Image from 'next/image';
import LocationButton from "../components/LocationButton";
import LocationSearch from "../components/LocationSearch";
import LocationGallery from "../components/LocationGallery";
import CityGallery from "../components/CityGallery";
import TopNav from "../components/TopNav";

const Home = ({locations}) => {
    return (
        <div className="container">
            <Head>
                <title>Openbaar sporten</title>
                <meta name="description" content="Openbaar sporten" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <TopNav />

            <main className="main">
                <div className="header">
                    <h1 className="title">Openbaar sporten</h1>
                    <p className="lead">Op zoek naar een tafeltennistafel of voetbalveld bij jou in de buurt? Wij verzamelen alle openbare sportgelegenheden in Nederland.</p>

                    {/*Add location search when there's actually something to you know, search for*/}
                    {/*<LocationButton />*/}
                    {/*<LocationSearch />*/}

                    <CityGallery cities={['Amsterdam', 'Rotterdam', 'Eindhoven']} />
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.jorisheijkant.nl/apps/sportparken/data/sportparken.json')
    const locations = await res.json();

    return {
        props: {
            locations
        },
    }
}

export default Home;