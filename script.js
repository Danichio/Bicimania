const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Envía la solicitud de precio por correo electrónico utilizando una librería de terceros como SendGrid o Nodemailer
  
  // Limpia el formulario
  form.reset();
  
  // Muestra un mensaje de confirmación al usuario
  alert('Gracias por enviar tu solicitud de precio. Nos pondremos en contacto contigo pronto.');
});
