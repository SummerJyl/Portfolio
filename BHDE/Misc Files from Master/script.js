// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });

// Stop forms from reloading the page on submit

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted! (This is just a demo.)");
  });
});

// Existing toggle logic if any
const container = document.getElementById('container');
document.getElementById('register').addEventListener('click', () => {
  container.classList.add("active");
});
document.getElementById('login').addEventListener('click', () => {
  container.classList.remove("active");
});
