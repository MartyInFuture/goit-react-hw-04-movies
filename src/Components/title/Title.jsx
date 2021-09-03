import { TitleStyled } from './TitleStyled';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
