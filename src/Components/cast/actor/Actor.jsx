import { IMAGE_URL } from '../../../refs/refs';
import { ActorStyled } from './ActorStyled';
import PropTypes from 'prop-types';

const Actor = ({ item }) => {
  const { profile_path, name, original_name, character } = item;

  return (
    <ActorStyled>
      <div className="image_wrapper">
        <img
          className="image"
          src={IMAGE_URL + profile_path}
          alt={name || original_name}
        />
      </div>
      <p className="name">{name || original_name}</p>
      <p className="character">Character: {character}</p>
    </ActorStyled>
  );
};

export default Actor;

Actor.propTypes = {
  item: PropTypes.object,
};
