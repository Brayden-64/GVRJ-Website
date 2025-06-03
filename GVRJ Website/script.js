function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger');
  if (!nav || !burger) return;

  const isActive = nav.classList.toggle('active');
  burger.setAttribute('aria-expanded', isActive);

  // Close menu on outside click
  function handleClickOutside(e) {
    if (!nav.contains(e.target) && e.target !== burger) {
      nav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    }
  }

  // Close menu on Escape key
  function handleEscape(e) {
    if (e.key === 'Escape') {
      nav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    }
  }

  if (isActive) {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  }
}
