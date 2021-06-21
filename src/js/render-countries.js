const { alert, notice, info, success, error } = require('@pnotify/core');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import countriesListMarkup from '../templates/country-item.hbs';
import countryItemMarkup from '../templates/countries-list.hbs';
import { countriesInfoRef } from './refs';

export default function renderCountries(dataCountries) {
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
      delay: 3000,
      sticker: false,
      closerHover: false,
    });
  }
}
