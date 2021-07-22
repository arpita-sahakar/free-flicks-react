import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./Row.css"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then(res => {
            console.log(res.data.results)
            setMovies(res.data.results)
        })
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img className={`row_poster ${isLargeRow===true? "row_posterLarge" : ""}`} Key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row
