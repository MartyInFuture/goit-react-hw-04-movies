import { ReviewsStyled } from './ReviewsStyled';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import { getData } from '../../api/getData';

const Reviews = () => {
  const Review = lazy(() => import('./review/Review'));

  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData(`${'/movie/' + id + '/reviews'}`).then((data) =>
      setReviews(data.data.results)
    );
  }, []);

  return (
    <ReviewsStyled>
      {reviews.length === 0 ? (
        <h2>No reviews here</h2>
      ) : (
        reviews.map((item) => (
          <Suspense key={item.id} fallback={<div>Loading...</div>}>
            <Review item={item} />
          </Suspense>
        ))
      )}
    </ReviewsStyled>
  );
};

export default Reviews;
