const input = document.querySelector("input");
const add = document.getElementById("btn");
const taskContainer = document.getElementById("task-container");
const ul = document.getElementById('ul');

const date = document.getElementById('date')
const monthContainer = document.getElementById('month')
const year = document.getElementById('year')

function addDate () {
  var f = new Date();
  date.textContent = f.getDate()
  monthContainer.textContent = f.toLocaleString("ES", { month: "short" })
  year.textContent = f.getFullYear()
}

addDate()


btn.addEventListener("click", (e) => {
    e.preventDefault();
  
    const text = input.value;
    const result = text.charAt(0).toUpperCase() + text.slice(1);
  
    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = result;
  
      li.appendChild(p);
     
      ul.appendChild(li);

      li.setAttribute("id", "task");

      li.appendChild(addDeleteBtn());
  
      input.value = "";
    }
  });

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete";
    
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);
    });
  
    return deleteBtn;
  }

