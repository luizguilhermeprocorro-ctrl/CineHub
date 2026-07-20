import React from "react";
import { useState, useEffect } from 'react';
import { TMDB_KEY } from '../config'
import '../App.css';

function MovieDetails({ movieId, onBack, onToggleFavorite, favorites }) {
    const [movie, setMovie] = useState(null)
    const isFavorite = favorites.some(fav => fav.id === movie?.id)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_KEY}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
            })
            .catch(error => console.error("Erro ao buscar detalhes", error))
    }, [movieId])

    if (movie === null) {
        return <p style={{ color: '#fff' }}>Carregando dados do filme...</p>;
    }

    return (
        <div className="movie-details__container">
            <button onClick={onBack} className="movie-details__back-button">
                ← Voltar para o Início
            </button>
            <button
                className="movie-detail__favorite-button"
                onClick={() => {
                    onToggleFavorite(movie)
                }}
            >{isFavorite ? "❤️ Remover dos favoritos" : "🤍 Adicionar aos favoritos"}</button>

            <div className="movie-details__wrapper">
                <div className="movie-details__poster-wrapper">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="movie-details__poster"
                    />
                </div>

                <div className="movie-details__content">
                    <h1>{movie.title}</h1>

                    <div className="movie-details__info-row">
                        <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                        <span>Duração: {movie.runtime} min</span>
                        <span>Ano: {movie.release_date?.split("-")[0]}</span>
                    </div>

                    <p className="movie-details__overview">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;