import axios from 'axios';

const API_KEY = 'd60ee6f07d6e8c98fb010d96d99d1e06';

const BASE_URL = 'https://api.themoviedb.org/3';

const defaultParams = {
  api_key: API_KEY,
  language: 'en-US',
};

//get trending movies for Home page
export const getTrendingMovies = async () => {
  const options = new URLSearchParams({
    ...defaultParams,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer d60ee6f07d6e8c98fb010d96d99d1e06',
    },
  });
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?${options}`
    );

    // console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieId = async () => {
  const { data } = await axios.get(`$`);
  return data;
};
