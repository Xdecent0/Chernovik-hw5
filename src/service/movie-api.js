import axios from 'axios';

const API_KEY = '874182b6b3aecb13c206a219dffff167';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async (page = 1) => {
  const res = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );
  return res.data.results;
};

export const getMovieSearch = async (query, page = 1) => {
  const res = await axios.get(
    `/search/movie?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
};
export const getMovieDetails = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);

  return res.data;
};
export const getMoviesCredits = async id => {
  const res = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};
export const getMovieReviews = async (id, page = 1) => {
  const res = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return res.data.results;
};
