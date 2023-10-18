import { useState, useEffect } from 'react';

import { Loader, MoviesList, SearchBar } from 'components';
import { searchByTitle } from 'services/APIs';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovie = async name => {
      setLoading(true);
      try {
        const search = await searchByTitle();
        setSearchMovie([...search]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie('Undefined Things');
  }, []);

  return (
    <>
      <div>Hello Movies</div>
      <SearchBar />
      {loading && <Loader />}
      <MoviesList movies={searchMovie} />
    </>
  );
};
