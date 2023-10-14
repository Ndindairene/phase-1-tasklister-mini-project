document.addEventListener("DOMContentLoaded", () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
   buildToDo(event.target.children[1].value);
   inputForm.reset();
    });
});

function buildToDo(todo){
 let p = document.createElement('p');
 let btn = document.createElement('button');
 btn.addEventListener('click',handleDelete);
 btn.textContent = 'X'
 p.textContent = ` ${todo} `
 p.appendChild(btn);
 document.querySelector("#list").appendChild(p);

}

function handleDelete(event) {
  event.target.parentNode.remove()
}