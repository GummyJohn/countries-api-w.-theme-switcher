const countriesDivDispay = document.querySelector('.countries-divs-container');
const inputCountryText = document.querySelector('.input-country');
const options = document.querySelectorAll('option');
const select = document.querySelector('.dropdown')
const searchButton = document.querySelector('search-img')


// console.log(countriesDivDispay)
// console.log(inputCountryText)
// console.log(options)
// console.log(select.length)

async function fetchData(){
  const response = await fetch('https://restcountries.com/v3.1/all');

  const data = await response.json();
  
  return data;
}


async function fetchDataName(text){
  const response = await fetch(`https://restcountries.com/v3.1/name/${text}`)

  const data = await response.json();
  
  return data;
}

async function fetchDataRegion(text){
  const response = await fetch(`https://restcountries.com/v3.1/region/${text}`)

  const data = await response.json();
  
  return data;
}



// console.log(fetchData());
// console.log(fetchDataName('eesti'));
// console.log(fetchDataRegion('europe'));

