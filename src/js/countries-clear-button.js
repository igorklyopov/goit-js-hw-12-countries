import { countriesInfoRef, inputCountriesRef, countriesClearButtonRef } from './refs';

function onCountriesClearButtonClick() {
  inputCountriesRef.value = '';
  countriesInfoRef.innerHTML = '';
  hideCountriesClearButton();
}

export const showCountriesClearButton = () => {
  countriesClearButtonRef.classList.remove('visually-hidden');
  countriesClearButtonRef.addEventListener('click', onCountriesClearButtonClick);
};

export const hideCountriesClearButton = () => {
  countriesClearButtonRef.classList.add('visually-hidden');
  countriesClearButtonRef.removeEventListener('click', onCountriesClearButtonClick);
};
