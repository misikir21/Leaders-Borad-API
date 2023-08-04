import Selector from './selector.js';

const objSelector = new Selector();

const addFunction = (e) => {
  e.preventDefault();
  const teamName = document.querySelector('.teamName').value;
  const teamScore = document.querySelector('.teamScore').value;
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dkdkfkjlkjlkdfklj6fKiMm/scores/', {
    method: 'POST',
    body: JSON.stringify({
      score: teamScore,
      user: teamName,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(`ErrorMessage : ${error}`);
    });
  objSelector.jsForm.reset();
};
export default addFunction;