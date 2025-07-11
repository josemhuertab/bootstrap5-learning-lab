document.addEventListener("DOMContentLoaded", () => {
  const btnToggle = document.getElementById("btnToggleDarkMode");
  const body = document.body;
  const icon = btnToggle.querySelector("i");
  const navbar = document.querySelector('.navbar');

  // Función para actualizar el ícono según el modo actual
  function updateIcon() {
    if (body.getAttribute("data-bs-theme") === "dark") {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    } else {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    }
  }

  // Función para actualizar clases de la navbar según el modo
  function updateNavbar() {
    if (body.getAttribute("data-bs-theme") === "dark") {
      navbar.classList.replace('navbar-light', 'navbar-dark');
      navbar.classList.replace('bg-light', 'bg-dark');
    } else {
      navbar.classList.replace('navbar-dark', 'navbar-light');
      navbar.classList.replace('bg-dark', 'bg-light');
    }
  }

  // ===== Al cargar, aplicar preferencia guardada =====
  if (localStorage.getItem("modoOscuro") === "true") {
    body.setAttribute("data-bs-theme", "dark");
  } else {
    body.removeAttribute("data-bs-theme");
  }
  updateIcon();
  updateNavbar();

  // ===== Evento de alternar modo oscuro/normal =====
  btnToggle.addEventListener("click", () => {
    if (body.getAttribute("data-bs-theme") === "dark") {
      body.removeAttribute("data-bs-theme");
      localStorage.setItem("modoOscuro", "false");
    } else {
      body.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("modoOscuro", "true");
    }
    updateIcon();
    updateNavbar();
  });

  // ===== Manejo de formulario de contacto =====
  const contactForm = document.getElementById("contactForm");
  const alertContainer = document.getElementById("alertContainer");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    // Obtener valores de los campos
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    // Crear alerta de Bootstrap
    const alert = document.createElement("div");
    alert.className = "alert alert-success alert-dismissible fade show";
    alert.role = "alert";
    alert.innerHTML = `
      ¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    `;

    // Insertar alerta en el contenedor
    alertContainer.innerHTML = ""; // Limpiar alertas anteriores
    alertContainer.appendChild(alert);

    // Reiniciar formulario
    contactForm.reset();
  });
});
