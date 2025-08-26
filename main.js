/* JS #01 â€” Panel mÃ³vil: abrir/cerrar */
const menuToggle = document.getElementById('menu-toggle');
const panelClose = document.getElementById('panel-close');
const sidebarRight = document.getElementById('sidebar-right');

if (menuToggle && sidebarRight) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebarRight.classList.contains('open');
    sidebarRight.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', !isOpen);
  });
}

if (panelClose && sidebarRight) {
  panelClose.addEventListener('click', () => {
    sidebarRight.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
}

/* JS #02 â€” SubmenÃºs accesibles con animaciÃ³n */
const navToggles = document.querySelectorAll('.nav-toggle');

navToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenuId = toggle.getAttribute('aria-controls');
    const submenu = document.getElementById(submenuId);
    const expanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !expanded);
    submenu.classList.toggle('open', !expanded);
  });
});

/* JS extra para animar hamburguesa */
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
  });
}


/* JS #03 â€” AÃ±o dinÃ¡mico en footer */
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
