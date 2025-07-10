// Selecciona el formulario con id "contactForm" y añade un listener para cuando se envíe el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Previene que el formulario se envíe de forma tradicional y recargue la página

  alert('Formulario enviado exitosamente!'); // Muestra mensaje de confirmación al usuario

  this.reset(); // Limpia todos los campos del formulario para que quede vacío después de enviar
});