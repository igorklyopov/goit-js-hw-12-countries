const debounce = require('lodash.debounce');
const { alert, notice, info, success, error } = require('@pnotify/core');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import countriesListMarkup from '../templates/country-item.hbs';
import countryItemMarkup from '../templates/countries-list.hbs';

const inputCountriesRef = document.querySelector('.countries__input');
const countriesInfoRef = document.querySelector('.countries__info');

inputCountriesRef.addEventListener('input', debounce(onInputCountries, 500));

function onInputCountries() {
  let countryName = inputCountriesRef.value.trim();

  if (countryName !== '' && isNaN(parseInt(countryName))) {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(response => response.json())
      .then(renderCountries);
  }
}

function renderCountries(dataCountries) {
  if (dataCountries.length === 1) {
    countriesInfoRef.innerHTML = countriesListMarkup(dataCountries);
  } else if (dataCountries.length > 1 && dataCountries.length <= 10) {
    countriesInfoRef.innerHTML = countryItemMarkup(dataCountries);
  } else if (dataCountries.length > 10) {
    error({
      title: 'Too many mathes found!',
      text: 'Please enter a more specific query!',
      maxTextHeight: null,
      shadow: true,
      animateSpeed: 'fast',
      delay: 4000,
      sticker: false,
      closerHover: false,
    });
  }
}

//Ukraine
//canada
// let n = parseInt('Ukraine'.trim());
// console.log(isNaN(n));
// console.log(Number.isNaN(n));
