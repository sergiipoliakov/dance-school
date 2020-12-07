const menuBtnEl = document.querySelector('[data-menu-button]');
const menuContainer = document.querySelector('[data-menu]')
console.log(menuBtnEl);
console.log(menuContainer)


menuBtnEl.addEventListener('click', onMenuOpen);

function onMenuOpen() {
   const expanded = menuBtnEl.getAttribute('aria-expanded') === 'true' || false;

    menuBtnEl.classList.toggle('is-open');
    menuBtnEl.setAttribute('aria-expanded', !expanded);

    menuContainer.classList.toggle('is-open');
}

