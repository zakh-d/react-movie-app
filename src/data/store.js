import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import movieReducer from "./movie_reducer";

const reducers = combineReducers({
    movies: movieReducer
});

const store = createStore(reducers, applyMiddleware(thunk))


window.store = store
export default store;