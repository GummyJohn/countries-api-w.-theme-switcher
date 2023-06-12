const countriesDivDispay = document.querySelector('.countries-divs-container');
const restartButton = document.querySelector('.refresh');
const inputCountryText = document.querySelector('.input-country');
const options = document.querySelectorAll('option');
const select = document.querySelector('.dropdown');
const darkMode = document.querySelector('.dark-mode');
const searchimg = document.querySelector('.search-img');
const searchBackground = document.querySelector('.input-dropdown');
// select.setAttribute('onchange', 'regionFilter()')
// console.log(select);

async function fetchDataAll(){
  const response = await fetch('https://restcountries.com/v3.1/all');
  
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
      singleDivs.innerHTML=`
        <img src ='${data[i].flags.png}' alt ='${data[i].flags.alt}' class='flag-img'>
        
        <div class='conutry-content'>
          <h2 class= 'conutry-title'>${data[i].name.common}</h2>
          
          <p class='population stats'>Population: ${data[i].population}</p>
          <p class='region stats'>Region: ${data[i].region}</p>
          <p class='captial stats'>Captial: ${data[i].capital}</p>         
        </div>
      `

      countriesDivDispay.append(singleDivs)
    }

    const containers = document.querySelectorAll('.single-container')
    return containers;
  })
  .then(containers => {
    inputCountryText.addEventListener('keypress', () => {
      if(event.keyCode === 13){
        for(let i = 0; i < containers.length; i++){
          let text = inputCountryText.value.toLowerCase();
    
          if(!(containers[i].innerText.toLowerCase().includes(text))){
            containers[i].classList.add('hide');
          }
        }
  
        inputCountryText.value = '';
      }
    })

    refreshButton.addEventListener('click', () => {
      for(let i = 0; i < containers.length; i++){
        containers[i].classList.remove('hide');
      }
    })

    const allContents = document.querySelectorAll('.conutry-content')
    return allContents
  })
  .then(contents => { 
    darkMode.addEventListener('click', () => {
      body.classList.toggle('black');
      searchimg .classList.toggle('dark-theme');
      searchBackground.classList.toggle('dark-theme');
      countriesDivDispay.classList.toggle('dark-theme');
      darkMode.classList.toggle('dark-theme');
     
      contents.forEach(contain => contain.classList.toggle('gray'))
    })
  })
  .catch(err => {
    console.log('Error' ,err)
  })
})



// async function fetchDataName(text){
//   const response = await fetch(`https://restcountries.com/v3.1/name/${text}`)
  
//   const data = await response.json();
  
//   return data;
// }

