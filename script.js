let btn = document.querySelector('.btn');
let page = document.querySelector('.section');
let secondPage = document.querySelector('.thank-you-container');
let para = document.querySelectorAll('.rating');
let span = document.querySelector('.span-value');


btn.addEventListener('click', () => {
  secondPage.style.display = 'flex';
  page.style.display = 'none';
});

para.forEach((rate) => {
  rate.addEventListener('click', () => {
    span.innerHTML = rate.innerHTML;
  })
});


