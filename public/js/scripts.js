document.addEventListener("DOMContentLoaded", () => {
  const btnToggle = document.getElementById("btnToggleDarkMode");
  const body = document.body;
  const icon = btnToggle.querySelector("i");

  function updateIcon() {
    if (body.getAttribute("data-bs-theme") === "dark") {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    } else {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    }
  }

  // Cargar preferencia guardada
  if (localStorage.getItem("modoOscuro") === "true") {
    body.setAttribute("data-bs-theme", "dark");
  } else {
    body.removeAttribute("data-bs-theme");
  }
  updateIcon();

  btnToggle.addEventListener("click", () => {
    if (body.getAttribute("data-bs-theme") === "dark") {
      body.removeAttribute("data-bs-theme");
      localStorage.setItem("modoOscuro", "false");
    } else {
      body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("modoOscuro", "true");
    }
    updateIcon();
  });
});

btnToggle.addEventListener("click", () => {
  if (body.getAttribute("data-bs-theme") === "dark") {
    body.removeAttribute("data-bs-theme");
    localStorage.setItem("modoOscuro", "false");
    document.querySelector('.navbar').classList.replace('navbar-dark', 'navbar-light');
    document.querySelector('.navbar').classList.replace('bg-dark', 'bg-light');
  } else {
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("modoOscuro", "true");
    document.querySelector('.navbar').classList.replace('navbar-light', 'navbar-dark');
    document.querySelector('.navbar').classList.replace('bg-light', 'bg-dark');
  }
  updateIcon();
});
