import { fetchDataAll } from "./api.js"
import {
  createHeader,
  createSearchDropdown,
  createSingleBox,
  createDivDisplay
} from "./component.js"

const body = document.querySelector('body');

body.append(createHeader())
body.append(createSearchDropdown())
body.append(createDivDisplay())

const countriesDivDispay = document.querySelector('.countries-divs-container');
const inputCountryText = document.querySelector('.input-country');
const darkMode = document.querySelector('.dark-mode');
const searchimg = document.querySelector('.search-img');
const searchBackground = document.querySelector('.input-dropdown');

const options = document.querySelectorAll('option');
const select = document.querySelector('.dropdown');


async function data(){
  const allCountries = await fetchDataAll();
  
  for(let i = 0; i < allCountries.length; i++){
    countriesDivDispay.append(createSingleBox(allCountries[i]))
  }
  
  let countriesBoxes = []
  countriesBoxes = [...document.querySelectorAll('.single-container')];
  
  inputCountryText.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();

    countriesBoxes.filter((country) => {
      if(!(country.innerText.toLowerCase().includes(searchString))){
        country.classList.add('hide');
      }else{
        country.classList.remove('hide');
      }
    })

  })


  select.addEventListener('change', (e) => {
    let region = e.target.value.toLowerCase();

    if(region === 'all'){
      window.location.reload();
    }

    countriesBoxes.filter((country) => {
      if(!(country.innerText.toLowerCase().includes(region))){
        country.classList.add('hide');
      }else{
        country.classList.remove('hide');
      }
    })
  })
  
  // Dark-Mode
  const contents = document.querySelectorAll('.country-content');

  darkMode.addEventListener('click', () => {
    body.classList.toggle('black');
    searchimg .classList.toggle('dark-theme');
    searchBackground.classList.toggle('dark-theme');
    countriesDivDispay.classList.toggle('dark-theme');
    darkMode.classList.toggle('dark-theme');
    
    contents.forEach(contain => contain.classList.toggle('gray'))
  })
}

data();
