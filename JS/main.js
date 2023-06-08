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

const body = document.querySelector('body');
const grayBackground = divCreate('gray-background');

const header = divCreate('header');

const darkModeBtn = document.createElement('button');
darkModeBtn.className = 'dark-mode'
darkModeBtn.innerHTML = `<span class='moon'><i class="fa-regular fa-moon"></i></span> Dark Mode`

header.append(PCreate('title', 'Where in the World?'))
header.append(darkModeBtn);

body.append(header);
body.append(grayBackground);

const inputSelectContainer = divCreate('input-dropdown');

const searchInputContainer = divCreate('search-input-container')
searchInputContainer.innerHTML = 
`<button class='search-img'><i class="fa-solid fa-magnifying-glass"></i></button>`

const searchInput = document.createElement('input');
searchInput.className= 'input-country';
searchInput.placeholder = `Search for a country...`;

const dropdown = document.createElement('select');
dropdown.className = 'dropdown';
//drop options 
let countryArr = ['Filter by Region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

countryArr.forEach(country => {
  const option = document.createElement('option');
  option.value = country;
  option.innerText = country;

  dropdown.append(option)
})

searchInputContainer.append(searchInput);
inputSelectContainer.append(searchInputContainer);
inputSelectContainer.append(dropdown);

grayBackground.append(inputSelectContainer);

const countriesDivContainer = divCreate('countries-divs-container');

grayBackground.append(countriesDivContainer)


