import { NavLink } from 'react-router-dom';

import { routes } from 'routes';

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to={routes.HOME}>Home</NavLink>
              </li>
              <li>
                <NavLink to={routes.MOVIES}>Movies</NavLink>
              </li>
            </ul>
          </nav>
          <hr />
        </div>
      </header>
    </>
  );
};
