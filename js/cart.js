// cart.js
const STORAGE_KEY = 'cart';

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge(cart);
  document.dispatchEvent(new CustomEvent('cart:change', { detail: cart }));
}

export function addToCart(id, qty) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
}

export function updateCartBadge(cart = getCart()) {
  const el = document.querySelector('.header_actions-count');
  if (!el) return;

  const total = Object.values(cart).reduce((s, n) => s + n, 0);
  el.textContent = total > 0 ? String(total) : '';
  el.dataset.count = total;
}

export function initCart() {
  updateCartBadge();

  document.addEventListener('click', (e) => {
    const cartBtn = e.target.closest('.btn-cart');
    if (!cartBtn) return;

    const card = cartBtn.closest('.product-card');
    if (!card) return;

    const id  = card.dataset.id;
    const qty = parseInt(card.querySelector('.qty-input').value, 10) || 1;

    if (!id) {
      console.warn('У карточки нет data-id');
      return;
    }

    addToCart(id, qty);
    card.querySelector('.qty-input').value = 1;
  });
}