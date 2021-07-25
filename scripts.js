function saveEmail(e) {
  e.preventDefault();

  let email = document.getElementById('email').value;

  if (!email) {
    alert('Digite um email!');
    return;
  }

  saveLocalStorage(email);
}

function saveLocalStorage(email) {
  let emails = [];

  let emailsAlreadyExists = JSON.parse(localStorage.getItem('email:'));

  if (emailsAlreadyExists) {
    emails.push(...emailsAlreadyExists);
  }

  emails.push(email);

  localStorage.setItem('email:', JSON.stringify(emails));

  alert('Cadastrado com sucesso!');
}

document.getElementById('submit').addEventListener('click', saveEmail, false);
