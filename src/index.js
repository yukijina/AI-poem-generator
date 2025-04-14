let h1 = document.querySelector('h1');
console.log(h1);
h1.addEventListener('click', (e) => {
  e.preventDefault();
  h1.classList.toggle('test');
});
