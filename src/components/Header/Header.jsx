import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <NavLink to={'/'} end>
            Home
          </NavLink>
          <NavLink to={'/'}>Movies</NavLink>
          <NavLink to={'/'}>MovieDetails</NavLink>
        </div>
      </header>
    </>
  );
};
