import { NavigationStyled } from './NavigationStyled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavLink activeClassName="activeLink" className="link" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="activeLink" className="link" to="/movies">
        Movies
      </NavLink>
    </NavigationStyled>
  );
};

export default Navigation;
