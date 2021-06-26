const { error } = require('@pnotify/core');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function showError(errMessage) {
  return error({
    text: errMessage,
    maxTextHeight: null,
    shadow: true,
    animateSpeed: 'fast',
    delay: 3000,
    sticker: false,
    closerHover: false,
  });
}
