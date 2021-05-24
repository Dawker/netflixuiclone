import axios from 'axios';


// base on a url to make requests to the movie data base

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;