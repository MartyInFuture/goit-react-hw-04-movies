import { useState, useEffect, lazy, Suspense } from 'react';
import { getData } from '../api/getData';

const HomeView = () => {
  const Title = lazy(() => import('../Components/title/Title'));
  const LinksList = lazy(() => import('../Components/linksList/LinksList'));
  const [trendingMovies, setTrengindMovies] = useState([]);

  useEffect(() => {
    getData('/trending/all/day').then((data) =>
      setTrengindMovies(data.data.results)
    );
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Title title="Trending today" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LinksList linksArr={trendingMovies} path={'movies'} />
      </Suspense>
    </div>
  );
};

export default HomeView;
