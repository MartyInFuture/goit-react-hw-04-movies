import { ReviewsStyled } from './ReviewStyled';
import PropTypes from 'prop-types';

const Review = ({ item }) => {
  const { author, content } = item;
  return (
    <ReviewsStyled>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </ReviewsStyled>
  );
};

export default Review;

Review.propTypes = {
  item: PropTypes.object,
};
