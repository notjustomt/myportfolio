const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuPanel) menuPanel.hidden = true;
}

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  if (menuPanel) menuPanel.hidden = !willOpen;
});

menuPanel?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});

document.addEventListener('click', (event) => {
  if (event.target instanceof Node && !event.target.parentElement?.closest('.nav-actions')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton?.focus();
  }
});

const shotsTrack = document.querySelector('.shots-track');
const shotsGroup = document.querySelector('.shots-group');

if (shotsTrack && shotsGroup) {
  const duplicate = shotsGroup.cloneNode(true);
  if (duplicate instanceof HTMLElement) {
    duplicate.setAttribute('aria-hidden', 'true');
    duplicate.querySelectorAll('a').forEach((link) => link.setAttribute('tabindex', '-1'));
    shotsTrack.append(duplicate);
  }
}
