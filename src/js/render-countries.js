import countriesListMarkup from '../templates/country-item.hbs';
import countryItemMarkup from '../templates/countries-list.hbs';
import { countriesInfoRef } from './refs';
import { showError } from './show-error';

export default function renderCountries(dataCountries) {
  if (dataCountries.length === 1) {
    countriesInfoRef.innerHTML = countriesListMarkup(dataCountries);
  } else if (dataCountries.length > 1 && dataCountries.length <= 10) {
    countriesInfoRef.innerHTML = countryItemMarkup(dataCountries);
  } else if (dataCountries.length > 10) {
    showError('Too many mathes found! Please enter a more specific query!');
  }
}
