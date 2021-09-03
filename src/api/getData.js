import axios from 'axios';
import { MAIN_URL, API_KEY } from '../refs/refs';

export const getData = (path, query = false) => {
  try {
    const newQuery = query ? `&query=${query}` : '';
    const res = axios
      .get(MAIN_URL + path + `?api_key=${API_KEY}` + newQuery)
      .then((data) => data);
    return res;
  } catch {
    alert('404 not found');
  }
};
