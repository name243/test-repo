export function initBurger() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header_menu');
    const menuLinks = document.querySelectorAll('.menu_link');
    const MOBILE_BREAKPOINT = 1300;

    if (!burger || !menu) return;

    const toggleMenu = (force) => {
        const isOpen = typeof force === 'boolean'
            ? force
            : !menu.classList.contains('is-open');

        menu.classList.toggle('is-open', isOpen);
        burger.classList.toggle('is-active', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('no-scroll', isOpen);
    };

    // Открытие / закрытие по кнопке
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Закрытие при клике по ссылке меню
    menuLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (
            menu.classList.contains('is-open') &&
            !menu.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            toggleMenu(false);
        }
    });

    // Сброс при возврате на десктоп
    window.addEventListener('resize', () => {
        if (window.innerWidth > MOBILE_BREAKPOINT && menu.classList.contains('is-open')) {
            toggleMenu(false);
        }
    });


}