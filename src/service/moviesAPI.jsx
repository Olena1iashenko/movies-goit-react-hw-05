import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "345248b3f6c217de68dc4864b5478bda";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDUyNDhiM2Y2YzIxN2RlNjhkYzQ4NjRiNTQ3OGJkYSIsInN1YiI6IjY2M2ZjNjg3ZmMxMWYxMzcxZjQzNWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWxM8CL7qmUxAjEEAeUnMmO6OZyS1qUKBmj1CxeVHmo";
const urlTrending = "trending/movie/day";
const urlSearch = "search/movie";

const options = {
  headers: {
    Authorization: TOKEN,
  },
  params: { safesearch: "true", api_key: API_KEY },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(urlTrending, options);
  return data.results;
};

export const getMovies = async (query) => {
  const { data } = await axios.get(urlSearch, {
    headers: {
      Authorization: TOKEN,
    },
    params: { safesearch: "true", api_key: API_KEY, query },
  });
  return data.results;
};

export const fetchMoviesDetails = async (id) => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};
console.log(fetchMoviesDetails(1105407));

export const fetchMoviesCredits = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

console.log(fetchMoviesCredits(946310));

export const fetchMoviesReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data.results;
};

console.log(fetchMoviesReviews(967847));
