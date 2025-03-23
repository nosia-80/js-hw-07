/*
 * В HTML есть пустой список `ul#ingredients`.
 *
 * В JS есть массив строк.
 *
 * Напиши скрипт, который для каждого элемента массива `ingredients` создаст
 * отдельный `li`, после чего вставит все `li` за одну операцию в список
 * `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.
 */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement('li');

//   itemEl.textContent = ingredients[i];
//   items.push(itemEl);
// }

// const items = ingredients.map(item => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = item;

//   return itemEl;
// });

const makeIngredientsItems = ingredients => {
  return ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;

    return itemEl;
  });
};

const items = makeIngredientsItems(ingredients);

ingredientsEl.append(...items);
