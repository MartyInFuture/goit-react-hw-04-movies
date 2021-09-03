import { useHistory, useLocation } from 'react-router';

const GoBack = () => {
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.push(location.state?.from);
  };
  return <button onClick={goBack}>{'<- Go back'}</button>;
};

export default GoBack;
