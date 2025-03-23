/*
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
 * на правильное количество символов.
 *
 * - Сколько символов должно быть в инпуте указывается в его атрибуте
 *   `data-length`.
 * - Если введено подходящее количество, то `border` инпута становится зелёным,
 *   если неправильное - красным.
 *
 * Для добавления стилей, используй CSS-классы `valid` и `invalid`.
 */

const validationInputEl = document.querySelector('#validation-input');
const dataLength = Number(validationInputEl.dataset.length);

validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === dataLength) {
    validationInputEl.classList.replace('invalid', 'valid');
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.replace('valid', 'invalid');
    validationInputEl.classList.add('invalid');
  }
}
