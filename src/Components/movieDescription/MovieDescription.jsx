import { MovieDescriptionStyled } from './MovieDescriptionStyled';
import Title from '../title/Title';
import { IMAGE_URL } from '../../refs/refs';
import PropTypes from 'prop-types';

const MovieDescription = ({ movie }) => {
  const {
    overview,
    vote_average,
    original_name,
    original_title,
    poster_path,
    genres = [],
  } = movie;
  return (
    <MovieDescriptionStyled>
      <div className="image_wrapper">
        <img
          src={IMAGE_URL + poster_path}
          alt={original_name ?? original_title}
        />
      </div>
      <div>
        <Title title={original_name ?? original_title} />
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </MovieDescriptionStyled>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movie: PropTypes.object,
};
