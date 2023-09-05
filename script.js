const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) =>{
    evento.preventDefault(); //*Para no recargar la pagina al momento de hacer click en el boton
    const input = document.querySelector("[data-form-input]")
    console.log(input.value);
}

//!Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

