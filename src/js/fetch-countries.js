const BASE_URL = 'https://restcountries.eu/rest/v2';

export default function fetchCountries(searchSetting, searchQuery) {
  return fetch(`${BASE_URL}/${searchSetting}/${searchQuery}`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('response status is ' + response.status, response.statusText);
    }
  });
}
