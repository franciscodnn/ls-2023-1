import flags from './model/flags.js';

loadData();

function loadData() {
  const div = `
        <div class="flag col-2 my-2 text-center">
        <img src="${flags[0].image}" alt="${flags[0].name}">
        <p>${flags[0].name}</p>
        </div>
      `;

  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', div);
}

// console.log(flags);
