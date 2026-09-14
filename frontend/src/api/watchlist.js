import axios from "axios";

const API = axios.create({
  baseURL: "https://filmnest-backend.onrender.com",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;}
  return config;
});

export const getWatchlist = async () => {
  const { data } = await API.get("/watchlist");
  return data;
};

export const addToWatchlist = async (movieId) => {
  const { data } = await API.post("/watchlist", {
    movie_id: movieId,
  });

  return data;
};

export const removeFromWatchlist = async (movieId) => {
  const { data } = await API.delete(`/watchlist/${movieId}`);
  return data;
};
