const down = document.querySelector("#drop-down");
const row = document.querySelector("#row");
const column = document.querySelector("#column");

row.onclick = (event) => {
  event.preventDefault();
  alert("row");
};

column.onclick = (event) => {
  event.preventDefault();
  alert("column");
};

something.onclick = (event) => {
  event.preventDefault();
  alert("something else");
};
