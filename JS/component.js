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

function button(name, text){
  const button = document.createElement('button');
  button.className = name;
  button.innerText = text;

  return button
}

export function createHeader(){  
  const header = divCreate('header');
  
  const darkModeBtn = button('dark-mode', '');
  darkModeBtn.innerHTML = `<span class='moon'><i class="fa-regular fa-moon"></i></span> Dark Mode`;
  
  header.append(PCreate('title', 'Where in the World?'))
  header.append(darkModeBtn);

  return header
}

export function createSearchDropdown(){
  const inputSelectContainer = divCreate('input-dropdown');
  
  const searchInputContainer = divCreate('search-input-container')
  searchInputContainer.innerHTML = 
  `<button class='search-img'> 
    <i class="fa-solid fa-magnifying-glass"></i>
  </button>`
  
  const searchInput = document.createElement('input');
  searchInput.className= 'input-country';
  searchInput.placeholder = `Search for a country...`;
  
  const dropdown = document.createElement('select');
  dropdown.className = 'dropdown';
  
  const firstOption = document.createElement('option');
  firstOption.innerText = 'All'
  
  dropdown.prepend(firstOption);
  
  //drop options 
  let countryArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
  for(let i = 0; i < countryArr.length; i++){
    const option = document.createElement('option');
    option.innerText = countryArr[i];
    option.value = countryArr[i];
    
    dropdown.append(option)
  }
  
  searchInputContainer.append(searchInput);
  inputSelectContainer.append(searchInputContainer);
  inputSelectContainer.append(dropdown);

  return inputSelectContainer;
}

export function createDivDisplay(){
  const countriesDivContainer = divCreate('countries-divs-container');

  return countriesDivContainer
}

export function createSingleBox({flags, population, region, capital, name}){
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


