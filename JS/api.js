const countriesDivDispay = document.querySelector('.countries-divs-container');
const inputCountryText = document.querySelector('.input-country');
const options = document.querySelectorAll('.options');
const select = document.querySelector('.dropdown')
const searchButton = document.querySelector('.search-img');

function countryTitle(name, text){
  const title = document.createElement('h2')
  title.className = name;
  title.innerText = text

  return title;
}

async function fetchDataAll(){
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


window.addEventListener('load', () => {
   fetchDataAll()
  .then(data => {
    for(let i = 0; i < data.length; i++){
      const singleDivs = divCreate('single-container')
      const flagImg = divCreate('flag-img')
      const countryContent = divCreate('conutry-content')
            
      singleDivs.prepend(flagImg);
      singleDivs.append(countryContent);
      
      flagImg.innerHTML = `<img src='${data[i].flags.png}' alt='${data[i].flags.alt}'>`

      countryContent.append(countryTitle('conutry-title', `${data[i].name.common}`))
      countryContent.append(PCreate('population stats', `Population: ${data[i].population}`))
      countryContent.append(PCreate('region stats', `Region: ${data[i].region}`))
      countryContent.append(PCreate('captial stats', `Captial: ${data[i].capital}`))

      countriesDivDispay.append(singleDivs)
    }

    return data;
  })
  .catch(err => {
    console.log('Error' ,err)
  })
})

// console.log(fetchDataAll());
// console.log(fetchDataName('eesti'));
// console.log(fetchDataRegion('europe'));

