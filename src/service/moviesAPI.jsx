import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "345248b3f6c217de68dc4864b5478bda";
const urlTrending = "trending/movie/day";

const options = {
  headers: {
    // вставте свій токен
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDUyNDhiM2Y2YzIxN2RlNjhkYzQ4NjRiNTQ3OGJkYSIsInN1YiI6IjY2M2ZjNjg3ZmMxMWYxMzcxZjQzNWZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nWxM8CL7qmUxAjEEAeUnMmO6OZyS1qUKBmj1CxeVHmo",
  },
  params: { safesearch: "true", api_key: API_KEY },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(urlTrending, options);
  return data.results;
};
