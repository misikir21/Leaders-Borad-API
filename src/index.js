import './style.css';

import displayScores from '../modules/reload.js';

import addFunction from '../modules/add.js';
import Selector from '../modules/selector.js';

const objSelector = new Selector();

objSelector.jsForm.addEventListener('submit', (e) => {
  addFunction(e);
});

objSelector.refresh.addEventListener('click', displayScores);

window.onload = displayScores;

