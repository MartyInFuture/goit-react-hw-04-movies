import { AditionalInfoStyled } from './AditionalInfoStyled';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

const AditionalInfo = () => {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <AditionalInfoStyled>
      <p>Additional information</p>
      <ul>
        <li>
          <Link
            to={{
              pathname: url + '/cast',
              state: { from: location.state?.from },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: url + '/reviews',
              state: { from: location.state?.from },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </AditionalInfoStyled>
  );
};

export default AditionalInfo;
