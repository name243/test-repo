// count.js
export function initCount() {
  const MIN = 1;
  const MAX = 99;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;

    const counter = btn.closest('.quantity-counter');
    const input   = counter.querySelector('.qty-input');
    if (!input) return;

    let value = parseInt(input.value, 10) || MIN;
    if (btn.dataset.action === 'plus')  value = Math.min(value + 1, MAX);
    if (btn.dataset.action === 'minus') value = Math.max(value - 1, MIN);

    input.value = value;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
}