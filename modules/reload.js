import Selector from './selector.js';

const selector = new Selector();

const displayScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    selector.list.innerHTML = '';
    const items = data.result.slice(0, 15);
    items.forEach((item, i) => {
      selector.list.innerHTML += `<li class="item-${(i + 1) % 2 === 0 ? 'odd' : ''}" >${item.user} : ${item.score}</li>   `;
    });
  } catch (error) {
    throw new Error(`ErrorMessage : ${error}`);
  }
};

export default displayScores;