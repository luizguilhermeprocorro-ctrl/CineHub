import React from "react"
import styles from "./MovieCard.module.css"

function MovieCard({ movie, onSelectMovie }) {
    return (
        <div
            className={styles.card}
            onClick={() => {
                onSelectMovie(movie.id)
            }}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
            />
            <h4>{movie.title}</h4>
        </div>
    )
}

export default MovieCard