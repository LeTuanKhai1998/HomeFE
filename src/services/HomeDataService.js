import axios from "axios";
import APIPath from "../utils/APIPath";

const INSTRUCTOR = "api/home";
const COURSE_API_URL = "http://localhost:8083";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`;

class UsersDataService {
    getMostPopularMovie(number){
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.MostPopularMovie}${number}`);
    }
    getMovieBySLug(slug) {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.MovieBySlug}${slug}`);
    }

    getMovies(type) {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.Movies}${type}`);
    }

    getGenres() {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.Genres}`);
    }

    getCountrys() {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.Countrys}`);
    }

}

export default new UsersDataService();