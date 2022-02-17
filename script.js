const elements = document.querySelectorAll('.panel');

elements.forEach(a => {
  a.addEventListener('click', () => {
    removeActiveClasses();
    a.classList.add('active');
  });
});

function removeActiveClasses() {
  elements.forEach(a => {
    a.classList.remove('active');
  });
};