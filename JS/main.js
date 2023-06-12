function divCreate(name){
  const div = document.createElement('div')
  div.className = name;

  return div;
}

function PCreate(name, text){
  const p = document.createElement('p');
  p.className = name;
  p.innerText = text;

  return p;
}

function countryTitle(name, text){
  const title = document.createElement('h2')
  title.className = name;
  title.innerText = text

  return title;
}

function button(name, text){
  const button = document.createElement('button');
  button.className = name;
  button.innerText = text;

  return button
}


const body = document.querySelector('body');

const header = divCreate('header');

const darkModeBtn = button('dark-mode', '');
darkModeBtn.innerHTML = `<span class='moon'><i class="fa-regular fa-moon"></i></span> Dark Mode`;

header.append(PCreate('title', 'Where in the World?'))
header.append(darkModeBtn);

body.append(header);


const inputSelectContainer = divCreate('input-dropdown');

const searchInputContainer = divCreate('search-input-container')
searchInputContainer.innerHTML = 
`<button class='search-img'> 
  <i class="fa-solid fa-magnifying-glass"></i>
</button>`

const searchInput = document.createElement('input');
searchInput.className= 'input-country';
searchInput.placeholder = `Search for a country...`;

const refreshButton = document.createElement('button');
refreshButton.className = 'refresh'
refreshButton.innerText = 'REFRESH'

const dropdown = document.createElement('select');
dropdown.className = 'dropdown';

const firstOption = document.createElement('option');
firstOption.innerText = 'Filter by Region'

dropdown.prepend(firstOption);

//drop options 
let countryArr = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

for(let i = 0; i < countryArr.length; i++){
  const option = document.createElement('option');
  option.innerText = countryArr[i];
  option.value = countryArr[i];
  
  dropdown.append(option)
}


searchInputContainer.append(searchInput);
searchInputContainer.append(refreshButton);
inputSelectContainer.append(searchInputContainer);
inputSelectContainer.append(dropdown);

body.append(inputSelectContainer);

const countriesDivContainer = divCreate('countries-divs-container');

body.append(countriesDivContainer)



// const searchInput = document.createElement('input');
// searchInput.className= 'input-country';
// searchInput.placeholder = `Search for a country...`;
// const refreshButton = button('refresh', 'REFRESH');

// const dropdown = divCreate('dropdown');
// const inputDropDown = document.createElement('input');
// inputDropDown.className = 'textbox'
// inputDropDown.placeholder = 'Filter by Region';
// inputDropDown.setAttribute('readonly', '');

// const choiceContainer = divCreate('button-option hide')
// choiceContainer.append(button('choice', 'Africa'))
// choiceContainer.append(button('choice', 'America'))
// choiceContainer.append(button('choice', 'Asia'))
// choiceContainer.append(button('choice', 'Europe'))
// choiceContainer.append(button('choice', 'Oceania'))

// dropdown.append(inputDropDown)
// dropdown.append(choiceContainer)
