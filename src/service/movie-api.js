import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
const apiKey = "13dc2daf8b95b491b59faa4413ffe9ea";

export class ApiService {
  async trendingMovies() {
    return await axios
      .get(`/3/trending/movie/day?api_key=${apiKey}`)
      .then((res) => res.data.results);
  }

  async searchMovie(searchQuery) {
    return await axios
      .get(
        `3/search/movie?api_key=${apiKey}&language=minLength%3A%202%20pattern%3A%20%28%5Ba-z%5D%7B2%7D%29-%28%5BA-Z%5D%7B2%7D%29&query=${searchQuery}&page=1&include_adult=false`
      )
      .then((res) => res.data.results);
  }

  async getMovieDetails(movieId) {
    return await axios
      .get(`/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.data);
  }

  async getMovieCast(movieId) {
    return await axios
      .get(`/3/movie/${movieId}/credits?api_key=${apiKey}`)
      .then((res) => res.data.cast);
  }

  async getMovieReviews(movieId) {
    return await axios
      .get(
        `/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => res.data.results);
  }
}
