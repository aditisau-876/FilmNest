import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const getTrendingMovies = async () => {
  const { data } = await API.get("/movies/trending");
  return data.data;
};

export const getTopRatedMovies = async () => {
  const { data } = await API.get("/movies/top-rated");
  return data.data;
};

export const getNewReleases = async () => {
  const { data } = await API.get("/movies/now-playing");
  return data.data;
};

export const getUpcomingMovies = async () => {
  const { data } = await API.get("/movies/upcoming");
  return data.data;
};

export const searchMovies = async (query, genre, year, cast) => {
  const { data } = await API.get("/movies/search", {
    params: { query, genre, year, cast},
  });

  return data.data;
};

export const getMovieDetails = async (id) => {
  const { data } = await API.get(`/movies/${id}`);
  return data;
};

export const getMovieTrailer = async (id) => {
  const { data } = await API.get(`/movies/${id}/trailer`);
  return data;
};

export const getMovieCast = async (id) => {
  const { data } = await API.get(`/movies/${id}/cast`);
  return data.data;
};

export const getMovieReviews = async (id) => {
  const { data } = await API.get(`/movies/${id}/reviews`);
  return data.data;
};

export const getWatchProviders = async (id) => {
  const { data } = await API.get(`/movies/${id}/watch-providers`);
  return data;
};

export const getSimilarMovies = async (id) => {
  const { data } = await API.get(`/movies/${id}/similar`);
  return data.data;
};

export const getRecommendations = async (id) => {
  const { data } = await API.get(`/movies/${id}/recommendations`);
  return data.data;
};

export const getPopularMovies = async () => {
    const { data } = await API.get("/movies/popular");
    return data.data;
};