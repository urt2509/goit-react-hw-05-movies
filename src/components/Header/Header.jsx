import { routes } from 'routes';
import { Link } from './Header.styled.js';

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <Link to={routes.HOME}>Home</Link>

            <Link to={routes.MOVIES}>Movies</Link>
          </nav>
          <hr />
        </div>
      </header>
    </>
  );
};
