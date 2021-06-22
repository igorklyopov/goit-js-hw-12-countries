import { loadingSpinnerRef } from './refs';

export function showLoadProgress() {
  loadingSpinnerRef.classList.remove('is-hidden');
}

export function hideLoadProgress() {
  loadingSpinnerRef.classList.add('is-hidden');
}
