import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from 'routes';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={routes.HOME}>Home</NavLink>
          <NavLink to={routes.MOVIES}>Find movie</NavLink>
          <NavLink to={routes.MOVIEDETAILS}>Movie details</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
