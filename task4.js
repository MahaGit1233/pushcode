const Heading=document.querySelector('#main-heading');
Heading.style.textAlign='right';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.borderRadius='5px';
fruits.style.width='50%';
fruits.style.listStyleType='none';

const basket=document.querySelector('#basket-heading');
basket.style.marginLeft='30px';
basket.style.color='brown';

const fitem=document.querySelectorAll('.fruit');
for (let i=0;i<fitem.length;i++) {
  fitem[i].style.backgroundColor='lightGray';
  fitem[i].style.padding='10px';
  fitem[i].style.margin='10px';
  fitem[i].style.borderRadius='5px';
}

const evenfitem=document.querySelectorAll('.fruit:nth-child(even)');
for (let i=0;i<evenfitem.length;i++) {
  evenfitem[i].style.backgroundColor='brown';
  evenfitem[i].style.color='white';
}