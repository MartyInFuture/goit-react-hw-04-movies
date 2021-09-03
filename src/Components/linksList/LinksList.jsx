import { Link, useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinksList = ({ linksArr = [], path }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <ul>
      {linksArr.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${url}${path ?? ''}${'/' + item.id}`,
              state: { from: location },
            }}
          >
            {item.original_name ?? item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;

LinksList.propTypes = {
  linksArr: PropTypes.array,
  path: PropTypes.string,
};
