export function initNext() {
    const list = document.getElementById('specialList');
    const btn  = document.getElementById('specialShow');

    btn.addEventListener('click', () => {
        const open = list.classList.toggle('is-open');
        btn.textContent = open ? 'Скрыть' : 'Показать еще';
});
}