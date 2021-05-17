import React from 'react';
import MovieList from "./MovieList";
import { getFavoriteList, setItemToFavoriteList, removeItemFromFavoritesList} from "../../data/movie_reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    list: state.movies.favorite,
    favorite: state.movies.favorite.map(m => m.id),
})

export default connect(mapStateToProps, {
    getMovieList: getFavoriteList,
    getFavoriteList, setItemToFavoriteList, removeItemFromFavoritesList
})(MovieList)