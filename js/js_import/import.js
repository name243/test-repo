import { initNavigation } from '../navigation.js';
import { initNext } from '../next.js';
import { initCount } from '../count.js';
import { initCart } from '../cart.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initNext();
  initCount();
  initCart();
});