import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { Bar, Form, Button, Input } from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

const SearchBar = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleInput = e => {
    setSearchMovie(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchMovie.trim() === '') {
      return toast.error('Please enter text for search images');
    }

    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <Bar>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchMovie}
          autoComplete="on"
          autoFocus
          placeholder="Type your movie"
          onChange={handleInput}
        ></Input>
      </Form>

      <Button type="submit">
        <ImSearch />
      </Button>
    </Bar>
  );
};

SearchBar.propTypes = {
  searchImage: PropTypes.string,
};

export { SearchBar };
