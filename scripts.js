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

  let emailsAlready = JSON.parse(localStorage.getItem('email:'));

  if (emailsAlready) {
    emails.push(...emailsAlready);
  }

  emails.push(email);

  localStorage.setItem('email:', JSON.stringify(emails));

  alert('Cadastrado com sucesso!');
}

document.getElementById('submit').addEventListener('click', saveEmail, false);
