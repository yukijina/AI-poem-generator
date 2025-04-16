let apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
let myPrompt = '';
let myContext = '';
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${myPrompt}&context=${myContext}&key=${apiKey}`;

function generatePoem(event) {
  event.preventDefault();

  new Typewriter('.poem-container', {
    strings: (poemElement.innerHTML = 'can you see the poem result here'),
    autoStart: true,
    delay: 50,
    cursor: '',
  });
}
let formElement = document.querySelector('.input-form');

formElement.addEventListener('submit', generatePoem);
