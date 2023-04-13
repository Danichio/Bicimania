// // referencia de los campos
// const nombre = document.getElementById("nombre")
// const correo = document.getElementById("correo")
// const modelo = document.getElementById("modelo")
// const mensaje = document.getElementById("mensaje")

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Envía la solicitud de precio por correo electrónico utilizando una librería de terceros como SendGrid o Nodemailer
  
//   // Limpia el formulario
//   form.reset();

  
//   // Muestra un mensaje de confirmación al usuario
//   alert('Gracias por enviar tu solicitud de precio. Nos pondremos en contacto contigo pronto.');
// });




// function handlesumit (){
// console.log(nombre?.value, correo?.value, modelo?.value, mensaje?.value)}


// // {
// //   console.log("
// //     datos para procesar el Formulario
// //     ${nombre}
// //     ${correo}
// //     ${modelo}
// //     ${mensaje}
// // //     "
    

// //     )
// // }

const form = document.querySelector('form');

form.addEventListener('submit', capturadatos)

function capturadatos (e){
  e.preventDefault();
    const name=document.getElementById("nombre");
    const mail=document.getElementById("correo");
    const model=document.getElementById("modelo");
    const medida=document.getElementById("mensaje");
    console.log (name?.value, mail?.value, model?.value, medida?.value);
}