import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../api/getData';
import { Route } from 'react-router';

const SingleItemView = () => {
  const MovieDescription = lazy(() =>
    import('../Components/movieDescription/MovieDescription')
  );
  const AditionalInfo = lazy(() =>
    import('../Components/aditionalInfo/AditionalInfo')
  );
  const Cast = lazy(() => import('../Components/cast/Cast'));
  const Reviews = lazy(() => import('../Components/reviews/Reviews'));
  const GoBack = lazy(() => import('../Components/goBack/GoBack'));

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(`/movie/${id}`).then((data) => setMovie(data.data));
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GoBack />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDescription movie={movie} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AditionalInfo />
      </Suspense>

      <Route path="/movies/:id/cast">
        <Suspense fallback={<div>Loading...</div>}>
          <Cast />
        </Suspense>
      </Route>
      <Route path="/movies/:id/reviews">
        <Suspense fallback={<div>Loading...</div>}>
          <Reviews />
        </Suspense>
      </Route>
    </>
  );
};

export default SingleItemView;
