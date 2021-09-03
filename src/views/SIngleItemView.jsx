import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../api/getData';
import { Route } from 'react-router';
import GoBack from '../Components/goBack/GoBack';
import MovieDescription from '../Components/movieDescription/MovieDescription';
import AditionalInfo from '../Components/aditionalInfo/AditionalInfo';

const SingleItemView = () => {
  const Cast = lazy(() => import('../Components/cast/Cast'));
  const Reviews = lazy(() => import('../Components/reviews/Reviews'));

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(`/movie/${id}`).then((data) => setMovie(data.data));
  }, []);

  return (
    <>
      <GoBack />
      <MovieDescription movie={movie} />

      <AditionalInfo />

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
