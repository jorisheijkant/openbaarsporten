import Head from 'next/head';
import LocationGallery from "../../components/LocationGallery";
import TopNav from "../../components/TopNav";

const Home = ({locations}) => {
    return (
        <div className="container">
            <Head>
                <title>Openbaar sporten</title>
                <meta name="description" content="Openbaar sporten"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <TopNav />

            <main className="main">
                <LocationGallery locations={locations} county="Amsterdam" />
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