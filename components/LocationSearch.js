import {useState} from 'react';

const locationSearch = () => {
    const [input, setInput] = useState("");

    return (
        <input type="text" placeholder="Zoek een gemeente..." />
    )
};

export default locationSearch;