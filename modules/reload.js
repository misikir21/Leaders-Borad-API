import Selector from './selector.js';

const objSelector = new Selector();

const displayScores = () => {
  const gitData = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dkdkfkjlkjlkdfklj6fKiMm/scores/');
    if (res.status !== 200) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  };

  gitData().then((data) => {
    objSelector.list.innerHTML = '';
    const items = data.result;
    items.forEach((item, i) => {
      if (i < 15) {
        objSelector.list.innerHTML += `<li class="item-${(i + 1) % 2 === 0 ? 'odd' : ''}" >${item.user} : ${item.score}</li>   `;
      }
    });
  });
};
export default displayScores;