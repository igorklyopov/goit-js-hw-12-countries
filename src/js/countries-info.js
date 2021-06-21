const debounce = require('lodash.debounce');
import fetchCountries from './fetch-countries';
import { showCountriesClearButton, hideCountriesClearButton } from './countries-clear-button';
import { inputCountriesRef } from './refs';
import renderCountries from './render-countries';

inputCountriesRef.addEventListener('input', debounce(onInputCountries, 500));

function onInputCountries() {
  let inputCountriesValue = inputCountriesRef.value;
  let countryName = inputCountriesValue.trim();

  if (countryName !== '' && isNaN(parseInt(countryName))) {
    fetchCountries(countryName).then(renderCountries);
  }
  if (inputCountriesValue !== '') {
    showCountriesClearButton();
  } else {
    hideCountriesClearButton();
  }
}

//Ukraine
//canada
// let n = parseInt('Ukraine'.trim());
// console.log(isNaN(n));
// console.log(Number.isNaN(n));
