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

