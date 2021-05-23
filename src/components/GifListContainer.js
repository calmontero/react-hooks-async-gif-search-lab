import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const[gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("dog");
    console.log(query);
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=57eUFZBc04Oq3K88dh69oj7csilYT5en&rating=g&limit=3`)
        .then((response) => response.json())
        .then(({data}) => {
            const gifs = data.map((gif) => ({ url: gif.images.original.url }));
            setGifs(gifs);
        });
    }, [query]);

    return (
        <div style={{ display: "flex" }} >
            <GifList gifs={gifs} />
            <GifSearch onSubmitQuery={setQuery} />
        </div>
    );
}

export default GifListContainer;