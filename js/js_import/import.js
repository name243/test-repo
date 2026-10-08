import { initNavigation } from '../navigation.js';
import { initNext } from '../next.js';
import { initCount } from '../count.js';
import { initCart } from '../cart.js';
import { initBurger } from '../burger.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initNext();
  initCount();
  initBurger();
});