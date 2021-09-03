import Navigation from './navigation/Navigation';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const HomeView = lazy(() => import('../views/HomeView'));
  const SingleItemView = lazy(() => import('../views/SIngleItemView'));
  const MoviesView = lazy(() => import('../views/MoviesView'));

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeView />
          </Suspense>
        </Route>
        <Route path="/movies" exact>
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesView />
          </Suspense>
        </Route>
        <Route path="/movies/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <SingleItemView />
          </Suspense>
        </Route>
        <Route>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeView />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
};

export default App;
