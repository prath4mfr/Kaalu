function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "bestfriend"; // change as you like

  if (password === correctPassword) {
    window.location.href = "home.html";
  } else {
    document.getElementById('error').innerText = "Wrong password!";
  }
}
