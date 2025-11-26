const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Fungsi untuk menyimpan data login
function saveLogin(username, password) {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  console.log('Data login tersimpan');
}

// Fungsi untuk memeriksa data login
function checkLogin() {
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');
  if (username && password) {
    console.log('Data login ditemukan');
    document.getElementById('username').value = username;
    document.getElementById('password').value = password;
  } else {
    console.log('Data login tidak ditemukan');
  }
}

// Panggil fungsi checkLogin saat halaman dimuat
window.onload = checkLogin;

// Tambahkan event listener pada form login
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  saveLogin(username, password);
});
