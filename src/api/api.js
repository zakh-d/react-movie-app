import * as axios from 'axios'

const API_KEY = "2f9e6d72bedfbefe0a08611153bbc709";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/"
})

const moviesAPI = {
    getMostPopular: function(page = 1){
        return instance.get(`popular?api_key=${API_KEY}&language=ru&page=$`).then(response => response.data)
    },
    getMovieDetails: function(id){
        return instance.get(`${id}?api_key=${API_KEY}&language=ru`).then(response => response.data)
    }
}

export default moviesAPI;