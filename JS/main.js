import { fetchDataAll } from "./api.js"
import {
  divCreate,
  body
} from "./component.js"


const countriesDivDispay = document.querySelector('.countries-divs-container');
const inputCountryText = document.querySelector('.input-country');
const darkMode = document.querySelector('.dark-mode');
const searchimg = document.querySelector('.search-img');
const searchBackground = document.querySelector('.input-dropdown');

const options = document.querySelectorAll('option');
const select = document.querySelector('.dropdown');


function createSingleBox({flags, population, region, capital, name}){
  const singleDivs = divCreate('single-container')
  singleDivs.innerHTML=`
    <img src ='${flags.png}' alt ='${flags.alt}' class='flag-img'>
    
    <div class='country-content'>
      <h2 class= 'country-title'>${name.common}</h2>
      
      <p class='population stats'>Population: ${population}</p>
      <p class='region stats'>Region: ${region}</p>
      <p class='captial stats'>Captial: ${capital}</p>         
    </div>
  `
  return singleDivs;
}

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

