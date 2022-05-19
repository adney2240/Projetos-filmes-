import axios from "axios";


/* https://api.themoviedb.org/3/movie/now_playing?api_key=8a88848547fdab812b6b63cdf712e5fb */



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;
