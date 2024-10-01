// Add input element inside form, before button, to take fruit description
const form=document.querySelector('form')
const input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','description');
const subbtn=document.querySelector('button');
form.insertBefore(input,subbtn);

// Show the fruit description in italics on the next line
const ulist=document.querySelector('.fruits');
form.addEventListener('submit',function (event) {
  event.preventDefault();
  const fruittoadd=document.getElementById('fruit-to-add');
  const descriptoadd=document.getElementById('description');
  const newli=document.createElement('li');
  const newlitext=document.createTextNode(fruittoadd.value);
  newli.appendChild(newlitext);
  newli.className='fruit';
  const delbtn=document.createElement('button');
  const delbtntext=document.createTextNode('x');
  delbtn.appendChild(delbtntext);
  delbtn.className='delete-btn';
  const newdes=document.createElement('p');
  const newdestext=document.createTextNode(descriptoadd.value);
  newdes.style.fontStyle='italic';
  newdes.appendChild(newdestext);
  newli.appendChild(delbtn);
  newli.appendChild(newdes);
  ulist.appendChild(newli);
})

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter=document.getElementById('filter');
filter.addEventListener('keyup',function (event) {
  const textentered=event.target.value.toLowerCase();
  const fruititem=document.getElementsByClassName('fruit');
 // const desitem=document.getElementById('description');
  for (let i=0;i<fruititem.length;i++) {
    const currenttext=fruititem[i].firstChild.textContent.toLowerCase();
    const currentdes=fruititem[i].querySelector('p')?fruititem[i].querySelector('p').textContent.toLowerCase():'';
    if (currenttext.indexOf(textentered)===-1&&currentdes.indexOf(textentered)===-1) {
      fruititem[i].style.display='none';
    }
    else {
      fruititem[i].style.display='flex';
    }
  }
})