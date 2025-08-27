// Muestra un mensaje al enviar el formulario
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});
