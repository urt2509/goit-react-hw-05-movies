import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';

import { Container } from './Layout.styled';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: red;
//   }
// `;

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

//   <header>
//   <nav>
//     <NavLink to={routes.HOME}>Home</NavLink>
//     <NavLink to={routes.MOVIES}>Find movie</NavLink>
//     <NavLink to={routes.MOVIEDETAILS}>Movie details</NavLink>
//   </nav>
// </header>
