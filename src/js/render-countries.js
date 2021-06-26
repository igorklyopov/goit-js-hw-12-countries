import countriesListMarkup from '../templates/country-item.hbs';
import countryItemMarkup from '../templates/countries-list.hbs';
import { countriesInfoRef, countriesItemsRefs, inputCountriesRef } from './refs';
import { showError } from './show-error';
import fetchCountries from './fetch-countries';
import { hideCountriesClearButton } from './countries-clear';

export default function renderCountries(dataCountries) {
  if (dataCountries.length === 1) {
    countriesInfoRef.innerHTML = countriesListMarkup(dataCountries);
  } else if (dataCountries.length > 1 && dataCountries.length <= 10) {
    countriesInfoRef.innerHTML = countryItemMarkup(dataCountries);
    addListenersCountriesRefs();
  } else if (dataCountries.length > 10) {
    showError('Too many mathes found! Please enter a more specific query!');
  }
}

function onCountryClick(event) {
  let countryCapital = event.target.dataset.capital;
  fetchCountries('capital', countryCapital).then(renderCountries);
  hideCountriesClearButton();
  inputCountriesRef.value = '';
}

function addListenersCountriesRefs() {
  Array.prototype.forEach.call(countriesItemsRefs, element => {
    element.addEventListener('click', onCountryClick);
    element.classList.add('countries__name--hover');
  });
}
