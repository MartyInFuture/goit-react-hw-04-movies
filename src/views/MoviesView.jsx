import { getData } from '../api/getData';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../Components/search/Search';
import { isCompositeComponent } from 'react-dom/test-utils';

const MoviesView = () => {
  const LinksList = lazy(() => import('../Components/linksList/LinksList'));

  const [movies, setMovies] = useState([]);
  const search = useLocation().search;

  useEffect(() => {
    if (search !== '') {
      const searchQuery = new URLSearchParams(search).get('query');
      getMovies(searchQuery);
    } else {
      setMovies([]);
    }
  }, [search]);

  const getMovies = (search) => {
    getData('/search/movie', search).then((data) => {
      if (data.data.results.length === 0) {
        return false;
      }
      setMovies(data.data.results);
    });
  };

  return (
    <>
      <Search getSearchData={getMovies} />
      <Suspense fallback={<div>Loading...</div>}>
        <LinksList linksArr={movies} />
      </Suspense>
    </>
  );
};

export default MoviesView;
