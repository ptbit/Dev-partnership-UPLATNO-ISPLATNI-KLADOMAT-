document.querySelector('.hero__btn').addEventListener('click', function () {
  console.log('click1');
  const targetElement = document.getElementById('result');

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
});
document.querySelector('.service__btn').addEventListener('click', function () {
  console.log('click2');
  const targetElement = document.getElementById('result');

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
});

//THEME CHANGER
const body = document.querySelector('body');
const themeBtn = document.getElementById('theme');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentTheme = body.classList.contains('dark') ? 'dark' : '';
  localStorage.setItem('theme', currentTheme);
});
