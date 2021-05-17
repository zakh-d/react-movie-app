import moviesAPI from "../api/api";

const SET_MOST_POPULAR = "SET_MOST_POPULAR";
const SET_FAVORITE_LIST = "SET_FAVORITE_LIST";
const ADD_TO_FAVOURITE_LIST = "ADD_TO_FAVOURITE_LIST";
const REMOVE_FROM_FAVOURITE_LIST = "REMOVE_FROM_FAVOURITE_LIST";

const initialState = {
    mostPopular: [],
    favorite: [],
}

const movieReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_MOST_POPULAR:
            return {
                ...state,
                mostPopular: [...action.data.results]
            }
        case SET_FAVORITE_LIST:
            return {
                ...state,
                favorite: action.data
            }
        case ADD_TO_FAVOURITE_LIST:
            return {
                ...state,
                favorite: [...state.favorite, action.data]
            }
        case REMOVE_FROM_FAVOURITE_LIST:
            let newFavorite = state.favorite.filter(m => m.id !== action.id)
            return {
                ...state,
                favorite: [...newFavorite]
            }
        default:
            return state;
    }
}

const setMostPopularMovies = (data) => ({type: SET_MOST_POPULAR, data})
const setFavouriteList = (data) => ({type: SET_FAVORITE_LIST, data})
const addToFavouriteList = (data) => ({type: ADD_TO_FAVOURITE_LIST, data})
const removeFromFavouriteList = (id) => ({type: REMOVE_FROM_FAVOURITE_LIST, id})

export const getMostPopularMovies = (page) => async (dispatch) => {
    const data = await moviesAPI.getMostPopular(page)
    return dispatch(setMostPopularMovies(data))
}

export const getFavoriteList = () => async (dispatch) => {
    let favoriteIds = JSON.parse(localStorage.getItem('favoriteList'))
    let favorites = []
    if (!favoriteIds) favoriteIds = []
    for (const id of favoriteIds) {
        let movie = await moviesAPI.getMovieDetails(id)
        favorites.push(movie)
    }
    return dispatch(setFavouriteList(favorites))
}

export const setItemToFavoriteList = (id) => async (dispatch) => {
    let data = JSON.parse(localStorage.getItem('favoriteList'))
    if (!data) data = []
    if (!data.map(m => m.id).includes(id)) data.push(id)
    localStorage.setItem("favoriteList", JSON.stringify(data))
    const movie = await moviesAPI.getMovieDetails(id)
    return dispatch(addToFavouriteList(movie))
}

export const removeItemFromFavoritesList = (id) => (dispatch) => {
    let data = JSON.parse(localStorage.getItem('favoriteList'))
    if (!data) data = []
    const newData = data.filter(itemId => itemId !== id)
    localStorage.setItem("favoriteList", JSON.stringify(newData))
    return dispatch(removeFromFavouriteList(id))
}

export default movieReducer;