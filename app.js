 const btn = document.getElementById('button');

 document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

     btn.value = 'Enviando...';

     const serviceID = 'default_service';
     const templateID = 'template_bguu5vm';

     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        alert('Mensaje enviado!');
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });






















// const btn = document.getElementById('button');

// document.getElementById('form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita el envío predeterminado del formulario

//   // Realiza la validación del formulario aquí
//   if (validateForm()) {
//     // El formulario es válido, continúa con el envío
//     btn.value = 'Enviando...';
//     const serviceID = 'default_service';
//     const templateID = 'template_bguu5vm';

//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Enviar';
//         alert('Mensaje enviado!');
//       }, (err) => {
//         btn.value = 'Enviar';
//         alert(JSON.stringify(err));
//       });
//   } else {
//     // El formulario no es válido, no se envía
//     alert('Por favor, complete todos los campos requeridos.');
//   }
// });

// function validateForm() {
//   // Realiza la validación del formulario aquí, por ejemplo:
//   const nombre = document.getElementById('nombre').value;
//   const correo = document.getElementById('correo').value;
  
//   if (!nombre || !correo) {
//     return false; // Si falta algún campo requerido, el formulario no es válido
//   }
  
//   // Si llega hasta aquí, el formulario es válido
//   return true;
// }
