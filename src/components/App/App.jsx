import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import { Header, Layout } from 'components';

import { Home } from 'pages';
import { Movies } from 'pages';
import { MovieDetails } from 'pages';
import { Cast } from 'components';
import { Reviews } from 'components';

const handleSubmit = () => {
  console.log('hello');
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIEDETAILS} element={<MovieDetails />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
