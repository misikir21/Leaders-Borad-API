import Selector from './selector.js';

const selector = new Selector();

const addFunction = async (e) => {
  e.preventDefault();
  const teamName = document.querySelector('.teamName').value;
  const teamScore = document.querySelector('.teamScore').value;
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
      method: 'POST',
      body: JSON.stringify({
        score: teamScore,
        user: teamName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    await response.json();
    // handle the response data here as needed
  } catch (error) {
    throw new Error(`ErrorMessage : ${error}`);
  }

  selector.jsForm.reset();
};

export default addFunction;