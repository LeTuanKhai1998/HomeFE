import axios from "axios";
import APIPath from "../utils/APIPath";

const INSTRUCTOR = "api/home";
const COURSE_API_URL = "http://localhost:8083";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`;

class UsersDataService {
    getYear(){
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.Year}`);
    }
    search(form){
        return axios.post(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.Search}`, form);
    }
    postComment(form){
        return axios.post(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.PostComment}`, form);
    }
    getCommentByMovieId(form) {
        return axios.post(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.CommentByMovieId}`, form);
    }

    getMostPopularMovie(number) {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.MostPopularMovie}${number}`);
    }

    getMovieBySLug(slug) {
        return axios.get(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.MovieBySlug}${slug}`);
    }

    getMovieByGerneSLug(form) {
        return axios.post(`${INSTRUCTOR_API_URL}/${APIPath.MOVIE.MovieByGenreSlug}`, form);
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