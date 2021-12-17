import React from "react";
import PageTemplate from "../components/templateShowsListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTVShows} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist'

const TVPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('shows', getTVShows) //change name of query to stop interference!

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  /*const favorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true */

  return (
    <PageTemplate
      title="TV Shows"
      shows={shows}
      action={(show) => {
        return <PlaylistAddIcon show={show} />
      }}
    />
  );
};

export default TVPage;