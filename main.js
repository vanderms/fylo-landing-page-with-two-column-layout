const email = document.querySelector('.email-input');
const form = document.querySelector('form');
const warning = document.querySelector('.warning');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  warning.classList.add('hidden');
  email.classList.remove('invalid');
  form.reset();
});

console.log(email);
email.addEventListener('invalid', (e) => {
  e.preventDefault();
  warning.classList.remove('hidden');
  email.classList.add('invalid');
});