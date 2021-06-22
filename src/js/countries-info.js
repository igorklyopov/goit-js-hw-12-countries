const debounce = require('lodash.debounce');
import fetchCountries from './fetch-countries';
import { showCountriesClearButton, hideCountriesClearButton } from './countries-clear-button';
import { inputCountriesRef, countriesInfoRef } from './refs';
import renderCountries from './render-countries';
import { showLoadProgress, hideLoadProgress } from './load-progress';

inputCountriesRef.addEventListener('input', debounce(onInputCountries, 500));
inputCountriesRef.addEventListener('input', showLoadProgress);

const correctInputCountriesValue = () => {
  let countryName = inputCountriesRef.value.trim();
  if (countryName !== '' && isNaN(parseInt(countryName))) {
    return countryName;
  }
};

function onInputCountries() {
  let inputCountriesValue = inputCountriesRef.value;

  fetchCountries(correctInputCountriesValue()).then(renderCountries);
  hideLoadProgress();

  if (inputCountriesValue !== '') {
    showCountriesClearButton();
  } else {
    hideCountriesClearButton();
  }
}
