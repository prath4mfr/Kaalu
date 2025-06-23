function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "Saumyasigmahai"; // <-- your chosen password

  if (password === correctPassword) {
    window.location.href = "home.html"; // redirect to home page
  } else {
    document.getElementById('error').innerText = "Wrong password!";
  }
}
