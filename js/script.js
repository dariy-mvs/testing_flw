const parallax = document.querySelector('.parallax_box');
const header = document.querySelector('header');
const footer = document.querySelector('#bottom_info');

function updateParallax() {
  const { scrollY } = window;
  const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;

  const parallaxStart = headerBottom;
  const parallaxEnd = footerTop - parallax.offsetHeight;

  if (scrollY >= parallaxStart && scrollY <= parallaxEnd) {
    const relativeScroll = scrollY - parallaxStart;
    const move = relativeScroll * 0.8;
    parallax.style.transform = `translateY(${move}px)`;
  }
}
window.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);

const toggleButton = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${theme}-theme`);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme('light');
}

toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});