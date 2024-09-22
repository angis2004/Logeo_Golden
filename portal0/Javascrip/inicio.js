


document.getElementById('acces-button').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'angie@newport' && password === '123') {
      // Redirigir a la página principal
      window.location.href = 'inicio2.html';
  } else {
      // Redirigir a la página de error
      window.location.href = 'error.html';
  }
});

