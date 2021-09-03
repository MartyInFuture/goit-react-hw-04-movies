import { useState } from 'react';
import { SearchStyled } from './SearchStyled';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ getSearchData }) => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      alert('input something');
      return false;
    }
    getSearchData(search);
    history.push(`movies?query=${search}`);
    setSearch('');
  };

  return (
    <SearchStyled onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <button className="submit_button" type="submit">
        search
      </button>
    </SearchStyled>
  );
};

export default Search;

Search.propTypes = {
  getSearchData: PropTypes.func,
};
