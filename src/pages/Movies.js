import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { Loader, MoviesList, SearchBar } from 'components';
import { searchByTitle } from 'services/APIs';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = value => {
    setSearchParams({ search: value });
  };

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) {
      return;
    }
    const getMovie = async query => {
      setLoading(true);
      try {
        const search = await searchByTitle(query);
        setSearchMovie([...search]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie(query);
  }, [searchParams]);

  return (
    <>
      <Link to={'/'}>Go back</Link>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <MoviesList movies={searchMovie} />
    </>
  );
};
