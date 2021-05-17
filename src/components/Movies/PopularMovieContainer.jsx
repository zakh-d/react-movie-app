import React from 'react';
import MovieList from "./MovieList";
import {getMostPopularMovies, getFavoriteList, setItemToFavoriteList, removeItemFromFavoritesList} from "../../data/movie_reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    list: state.movies.mostPopular,
    favorite: state.movies.favorite.map(m => m.id),
})

export default connect(mapStateToProps, {
    getMovieList: getMostPopularMovies,
    getFavoriteList, setItemToFavoriteList, removeItemFromFavoritesList
})(MovieList)