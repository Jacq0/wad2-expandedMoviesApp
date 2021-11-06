import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api"; //get upcoming movies!

const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    //this doesn't change, we want to keep favourites as a feature on the page!
  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };
  
    useEffect(() => {
      getUpcomingMovies().then(movies => { //use the get upcoming from the api script
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    //change the title and return the movies!
    return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        selectFavorite={addToFavorites}
      />
    );
  };
  export default UpcomingMoviesPage;