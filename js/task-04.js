/*
 * Счётчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
 * значение счётчика на `1`.
 *
 * - Создай переменную `counterValue`, в которой будет хранится текущее значение
 *   счётчика.
 * - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
 *   счётчика.
 * - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса.
 */

const refs = {
  incrementBtn: document.querySelector('#counter > [data-action="increment"]'),
  decrementBtn: document.querySelector('#counter > [data-action="decrement"]'),
  valueEl: document.querySelector('#counter > #value'),
};

let counterValue = 0;

refs.incrementBtn.addEventListener('click', () => {
  refs.valueEl.textContent = increment();
});

refs.decrementBtn.addEventListener('click', () => {
  refs.valueEl.textContent = decrement();
});

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return (counterValue -= 1);
}
