const x = "X";
const o = "O";
let current_mark = x;

// Attach an event listener to all board cells
document.querySelectorAll('.board-cell').forEach(item => {
  item.addEventListener('click', event => {
    let element = event.target;
    // Check if cell is a valid candidate
    if(element.innerHTML == null || element.innerHTML == ""){
      // condition ? option 1: option 2
      current_mark = current_mark == x ? o : x;
      element.innerHTML = current_mark;
    }
  })
});
