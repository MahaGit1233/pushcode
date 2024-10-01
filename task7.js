// Add the Edit Button:
const list=document.querySelectorAll('.fruit');
for (let i=0;i<list.length;i++) {
  const editb=document.createElement('button');
  const editbtext=document.createTextNode('Edit');
  editb.appendChild(editbtext);
  editb.className='edit-btn';
  list[i].appendChild(editb);
}

// Implement the code as in video but with one extra 'Edit' button in 'li'
const form=document.querySelector('form');
const ulist=document.querySelector('.fruits');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fruittoadd=document.getElementById('fruit-to-add');
  const newli=document.createElement('li');
  const newlitext=document.createTextNode(fruittoadd.value);
  newli.appendChild(newlitext);
  newli.className='fruit';
  const delbtn=document.createElement('button');
  const delbtntext=document.createTextNode('x');
  delbtn.appendChild(delbtntext);
  delbtn.className='delete-btn';
  const editbtn=document.createElement('button');
  const editbtntext=document.createTextNode('Edit');
  editbtn.appendChild(editbtntext);
  editbtn.className='edit-btn';
  newli.appendChild(delbtn);
  newli.appendChild(editbtn);
  ulist.appendChild(newli);
});

ulist.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruittodel=event.target.parentElement;
    ulist.removeChild(fruittodel);
  }
});