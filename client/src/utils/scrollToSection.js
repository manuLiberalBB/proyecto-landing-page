const NAVBAR_OFFSET = 100;

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.scrollTo({ top, behavior: 'smooth' });
}
