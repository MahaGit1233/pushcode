const subhead=document.createElement('h3');
const subheadText=document.createTextNode('Buy high quality organic fruits online');
subhead.appendChild(subheadText);
const divs=document.getElementsByTagName('div');
const firdiv=divs[0];
firdiv.appendChild(subhead);

subhead.style.fontStyle='italic';

const secdiv=divs[1];
const para=document.createElement('p');
const paratext=document.createTextNode('Total fruits: 4');
para.appendChild(paratext);
const ul=document.querySelector('.fruits');
secdiv.insertBefore(para,ul);

para.id='fruits-total';