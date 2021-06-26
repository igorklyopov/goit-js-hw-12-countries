import { showError } from './show-error';

const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('response status is ' + response.status, response.statusText);
    }
  });
}
