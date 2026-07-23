import React from "react";

function CategoryFilters(props) {
    const genres = [
        { id: 28, name: "Ação" },
        { id: 35, name: "Comédia" },
        { id: 27, name: "Terror" },
        { id: 18, name: "Drama" },
        { id: 878, name: "Ficção Científica" }
    ];

    return (
        <div className="categoryContainer">
            <h3>Escolha seu tema preferido</h3>
            <div className="container-filters">
                <button
                    onClick={() => props.onCategorySelect(null)}
                    className={props.activeCategoryId === null ? "categoryButton active" : "categoryButton"}
                >Todos</button>
                {genres.map((movie) => {
                    return (
                        <button
                            key={movie.id}
                            className={props.activeCategoryId === movie.id ? "categoryButton active" : "categoryButton"}
                            onClick={() => props.onCategorySelect(movie.id)}
                        >
                            {movie.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryFilters;