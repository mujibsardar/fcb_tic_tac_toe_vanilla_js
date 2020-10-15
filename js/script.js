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

    if (didWin()) {
      alert(current_mark + " won!")
    }

  })
});

// Checks if there is a winner
function didWin(){
  // Check if all content in row 1 are the same 1 2 3 => 6
  // Check if all content in row 2 are the same 4 5 6 => 15
  // Check if all content in row 3 are the same 7 8 9 => 24

  // Check if all content in column 1 are the same 1 4 7 => 12
  // Check if all content in column 2 are the same 2 5 8 => 15
  // Check if all content in column 3 are the same 3 6 9 => 18

  // Check if all content in diagonal 1 are the same 1 5 9 => 15
  // Check if all content in diagonal 2 are the same 3 5 7 => 15
  return false;
}
