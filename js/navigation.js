// js/navigation.js
export function initNavigation() {
    document.addEventListener('DOMContentLoaded', () => {
  // Находим все ссылки в меню и сам header
  const menuLinks = document.querySelectorAll('.menu_link');
  const header = document.querySelector('.header');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Отменяем стандартное резкое поведение браузера
      e.preventDefault();

      // Получаем ID целевого блока из href ссылки
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Вычисляем высоту шапки (если она fixed/sticky)
        const headerHeight = header ? header.offsetHeight : 0;
        
        // Если у шапки есть margin/padding сверху, можно добавить их:
        // const headerOffset = headerHeight + 20; 

        // Получаем точную координату блока относительно документа
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        // Запускаем плавную прокрутку
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Опционально: меняем хэш в адресной строке, чтобы можно было скопировать ссылку
        history.pushState(null, null, targetId);
      }
    });
  });
});
}

