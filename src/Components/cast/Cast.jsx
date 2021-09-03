import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import { getData } from '../../api/getData';

import { CastStyled } from './CastStyled';

const Cast = () => {
  const Actor = lazy(() => import('./actor/Actor'));

  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData(`${'/movie/' + id + '/credits'}`).then((data) =>
      setCast(data.data.cast)
    );
  }, []);

  return (
    <CastStyled>
      {cast.map((item) => (
        <Suspense key={item.id} fallback={<div>Loading...</div>}>
          <Actor item={item} />
        </Suspense>
      ))}
    </CastStyled>
  );
};

export default Cast;
