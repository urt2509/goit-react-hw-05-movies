import { useState, useEffect } from 'react';

import { MoviesList } from 'components';
import { Loader } from 'components';
import { getTrendingMovies } from 'services/APIs';

export const Home = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieList = async () => {
      setLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingList([...trendingMovies]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieList();
  }, []);

  return (
    <>
      {loading && <Loader />}

      <MoviesList movies={trendingList} />
      <div>🍓💕🍓</div>
    </>
  );
};
