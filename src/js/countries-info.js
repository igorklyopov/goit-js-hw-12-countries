const debounce = require('lodash.debounce');
import fetchCountries from './fetch-countries';
import { showCountriesClearButton, hideCountriesClearButton } from './countries-clear-button';
import { inputCountriesRef, countriesInfoRef } from './refs';
import renderCountries from './render-countries';
import { showLoadProgress, hideLoadProgress } from './load-progress';
import { showError } from './show-error';

inputCountriesRef.addEventListener('input', debounce(onInputCountries, 500));
inputCountriesRef.addEventListener('input', showLoadProgress);

const validInputCountriesValue = value =>
  !/[0-9,/,.,\-,~,!,@,#,$,%,^,&,*,:,:,',?,<,>,_,\,№,|,+,=]/.test(value) && value !== '';

function onInputCountries() {
  let inputCountriesValue = inputCountriesRef.value;
  let countryName = inputCountriesRef.value.trim();

  if (validInputCountriesValue(countryName)) {
    fetchCountries(countryName)
      .then(renderCountries)
      .catch(error => {
        console.error(error);
        showError(
          'A country with that name has not been found! Please check the entry is correct!',
        );
      });
  } else if (countryName !== '') {
    showError(
      'Country names do not contain numbers and special characters like, _ - / + % ; : . Please enter only letters, please!',
    );
  }

  hideLoadProgress();

  if (inputCountriesValue !== '') {
    showCountriesClearButton();
  } else {
    hideCountriesClearButton();
  }
}
