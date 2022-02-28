

function initForm(root){
  const email = root.querySelector('.email-input');
  const form = root.querySelector('form');
  const warning = root.querySelector('.warning');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    warning.classList.add('hidden');
    email.classList.remove('invalid');
    form.reset();
  });  
 
  email.addEventListener('invalid', (e) => {
    e.preventDefault();
    warning.classList.remove('hidden');
    email.classList.add('invalid');
  });
}

document.querySelectorAll('.form-container').forEach(initForm);