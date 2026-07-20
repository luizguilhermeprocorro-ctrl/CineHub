import { useState, useEffect, use } from 'react'
import React from 'react'
import './App.css'
import Header from './Components/Header'
import MovieCard from "./Components/MovieCard"
import { TMDB_KEY } from './config'
import CategoryFilters from './Components/CategoryFilters'
import MovieDetails from './Components/MovieDetails'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [favorites, setFavorites] = useState([])


  function handleSearch(query) {
    setIsLoading(true)
    setActiveCategory(null)
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${query}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        setListOfMovies(data.results)
        setIsLoading(false)
      })
    if (query === "") {
      loadPopularItems()
      return
    }
  }

  function handleSelectedMovie(idMovie) {
    setSelectedMovie(idMovie)
  }

  function handleCategorySelected(idGenre) {
    setIsLoading(true)
    if (idGenre === null) {
      setActiveCategory(null)
      loadPopularItems()
      return;
    }
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&language=pt-BR&with_genres=${idGenre}`)
      .then(response => response.json())
      .then(data => {
        setListOfMovies(data.results)
        setIsLoading(false)
      })
      .catch(error => console.error("Erro ao buscar filmes:", error))
    setIsLoading(false)
    setActiveCategory(idGenre)
  }

  function loadPopularItems() {
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        setListOfMovies(data.results);
        setIsLoading(false)
      })
      .catch(error => console.error("Erro:", error));
    setIsLoading(false)
  }

  useEffect(() => {
    loadPopularItems()
  }, [])

  function handleToggleFavorite(movie) {
    const isFavorite = favorites.some(fav => fav.id === movie.id)
    if (isFavorite === false) {
      setFavorites([...favorites, movie])
    } else {
      const updateFavorites = favorites.filter(fav => fav.id !== movie.id)
      setFavorites(updateFavorites)
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Header onSearch={handleSearch} />
            <main style={{ marginTop: '120px', padding: '0 4%' }}>

              {selectedMovie !== null ? (
                <MovieDetails
                  movieId={selectedMovie}
                  onBack={() => setSelectedMovie(null)}
                  onToggleFavorite={handleToggleFavorite}
                  favorites={favorites}
                />
              ) : (
                <>
                  <CategoryFilters
                    onCategorySelect={handleCategorySelected}
                    activeCategoryId={activeCategory}
                  />
                  <h2>Filmes Populares</h2>
                  <div className='movies-container'>
                    {isLoading ? (
                      <p>Carregando filmes...</p>
                    ) : (
                      listOfMovies?.map((filme) => (
                        <MovieCard
                          key={filme.id}
                          movie={filme}
                          onSelectMovie={handleSelectedMovie}
                        />
                      ))
                    )}
                  </div>
                </>
              )}

            </main>
          </div>
        } />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;