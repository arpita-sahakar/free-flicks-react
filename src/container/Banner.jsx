import React from 'react';
import axios from 'axios';
import requests from '../requests';
import { useEffect, useState } from "react";

function Banner({ netflixOriginalsUrl }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(netflixOriginalsUrl).then(res => {
            let randomNo = Math.floor(Math.random() * res.data.results.length - 1);
            // console.log("Banner");
            // console.log(res.data.results[randomNo]);
            setMovie(res.data.results[randomNo]);
        })
    }, []);


    return (
        <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundPosition: "center center" }}>
            <div className="banner__contents">
                <h1>{movie.title || movie.name}</h1>
            </div>
        </header>
    )
}

export default Banner
