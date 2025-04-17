function displayPoem(response) {
  //  display API response data using Typewriter plug in
  new Typewriter('.poem-container', {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: '',
  });
}

function generatePoem(event) {
  // geenerate poem wth AI API
  event.preventDefault();
  let userInput = document.querySelector('.user-input').value;

  let apiKey = '2f5896dd4cc0cdo340203tba4fba205f';
  let myContext = 'You are a poem creater. Also you are familier with HTML.';
  let myPrompt = `Generate a short English poem related to ${userInput}. Poem should be within 10 sentense. Generate a well-organized poem with HTML element such as <h2>, <p>, <br /> <strong>. Omit your answe and html quote. At the end of poem, add <strong class="shecode">By SheCodes AI</strong>`;
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${myPrompt}&context=${myContext}&key=${apiKey}`;

  let poemContainer = document.querySelector('.poem-container');
  poemContainer.classList.remove('hidden');
  poemContainer.innerHTML = '<p class="blink">Generating a poem...</p>';

  axios.get(url).then(displayPoem);
}

// form submit event
let formElement = document.querySelector('.input-form');
formElement.addEventListener('submit', generatePoem);
