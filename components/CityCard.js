import Image from "next/image";
import Link from 'next/link';

import slugify from "../utils/slugify";

const cityCard = ({title}) => {
    return (
        <Link className="city-card" href={`/gemeentes/${encodeURIComponent(slugify(title))}`}>
            <a>
                <Image src="/img/placeholder.jpg"
                       width={200}
                       height={200} />
                <div className="card-content">
                    <h2>{title}</h2>
                </div>
            </a>
        </Link>
    )
};

export default cityCard;