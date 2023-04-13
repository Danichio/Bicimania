const form = document.querySelector('form');
form.addEventListener('submit', capturadato);

function capturadato (e){
  e.preventDefault();
    const name=document.getElementById("nombre");
    const mail=document.getElementById("correo");
    const model=document.getElementById("modelo");
    const medida=document.getElementById("mensaje");
    console.log (name?.value, mail?.value, model?.value, medida?.value);
    form.reset();
}

