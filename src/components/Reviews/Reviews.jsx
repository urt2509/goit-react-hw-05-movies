import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/APIs';

export const Reviews = () => {
  const [findedMovie, setFindedMovie] = useState({});

  useEffect(() => {
    const findMovieByName = async () => {
      try {
        const fetchMovieByName = await getTrendingMovies();
        setFindedMovie(fetchMovieByName);
        console.log(fetchMovieByName);
      } catch (error) {}
    };
    findMovieByName();
  }, []);

  return <div>Reviews</div>;
};
