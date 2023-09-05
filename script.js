const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) =>{
    evento.preventDefault(); //*Para no recargar la pagina al momento de hacer click en el boton
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value= ''; //*Para limpiar el input
    //*backticks
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  list.appendChild(task);
    console.log(value);
}

//!Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

