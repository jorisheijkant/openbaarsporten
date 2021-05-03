import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import LocationButton from "../components/LocationButton";
import LocationSearch from "../components/LocationSearch";
import LocationGallery from "../components/LocationGallery";

const Home = ({locations}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Openbaar sporten</title>
                <meta name="description" content="Openbaar sporten"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className="header">
                    <h1 className={styles.title}>Openbaar sporten</h1>
                    <p className={styles.lead}>Op zoek naar een tafeltennistafel of voetbalveld bij jou in de buurt? Wij verzamelen alle openbare sportgelegenheden in Nederland.</p>

                    <LocationButton />
                    <LocationSearch />
                </div>

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

export default Home;