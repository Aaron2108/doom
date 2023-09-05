( () =>  {  const btn = document.querySelector("[data-form-btn]")

const createTask = (evento) =>{
    evento.preventDefault(); //*Para no recargar la pagina al momento de hacer click en el boton
    const input = document.querySelector("[data-form-input]")
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value= ''; //*Para limpiar el input
    //*backticks
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value
    taskContent.appendChild(chekComplete())
    taskContent.appendChild(titleTask);
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
 // task.innerHTML = content;
 task.appendChild(taskContent)
  list.appendChild(task);
    console.log(value);
}

//!Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

const chekComplete = () =>{
    const i = document.createElement("i")
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i
}

const completeTask = (event) =>{
    console.log(event.target);
    const element = event.target
    element.classList.toggle("fas")
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
}
})();