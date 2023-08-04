import './style.css';
import displayRanks from '../modules/reload.js';
import addFunction from '../modules/add.js';
import Selector from '../modules/selector.js';

const objSelector = new Selector();

objSelector.jsForm.addEventListener('submit', (e) => {
  addFunction(e);
});
objSelector.refresh.addEventListener('click', displayRanks);

window.onload = displayRanks;