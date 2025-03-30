import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch('/movies.json')
            .then(response => response.json())
            .then(data => {
                const selectedMovie = data.find(m => m.id === parseInt(id));
                setMovie(selectedMovie);
            });
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <div className="details">
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Rating:</strong> {movie.rating}/10</p>
                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Duration:</strong> {movie.duration}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;