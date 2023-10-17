import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={'/'}>
            <h4>{title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};
