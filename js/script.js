// Make sure the DOM is ready before running JavaScript
$(document).ready(function(){
  const x = "X";
  const o = "O";
  // Keeps track of the current turn ("X", "O")
  let current_mark;
  // How many times x won
  let x_won;
  // How many times y won
  let o_won;

  // Start the game
  function startGame(){
    initializeVariables();
    attachEventListeners();
    setScoreBoard();
  }

  // Reset the game, clear board and scores
  function resetGame(){
    resetBoard();
    initializeVariables();
    setScoreBoard();
  }

  // Initialize global variables
  function initializeVariables(){
    current_mark = x;
    x_won = 0;
    o_won = 0;
  }

  // Attach an event listener to all board cells and reset button
  function attachEventListeners(){
    $(".board-cell").each(function() {
      $(this).click(function(){
        $("#reset-button").fadeToggle(5000);
        if($(this).text() == null || $(this).text() == ""){
          // condition ? option 1: option 2
          current_mark = current_mark == x ? o : x;
          $(this).text(current_mark);
        }

        if (didWin()) {
          alert(current_mark + " Won!");
          current_mark === x ? x_won++ : o_won++;
          resetBoard();
          setScoreBoard();
        }
      })
    });

    // jQuery
    $("#reset-button").click(function(){
      resetGame();
    });

  }

  // Update the score on the page
  function setScoreBoard(){
    $("#x-score").text(x_won);
    $("#o-score").text(o_won);
  }

  // Reset the board
  function resetBoard(){
    $(".board-cell").each(function() {
      $(this).text('');
    })
    current_mark = x;
  }

  // Checks if there is a winner
  function didWin(){
    let value_1 = $('#cell-1').text();
    let value_2 = $('#cell-2').text();
    let value_3 = $('#cell-3').text();

    let value_4 = $('#cell-4').text();
    let value_5 = $('#cell-5').text();
    let value_6 = $('#cell-6').text();

    let value_7 = $('#cell-7').text();
    let value_8 = $('#cell-8').text();
    let value_9 = $('#cell-9').text();


    // Check if all content in row 1 are the same 1 2 3 => 6
    if(value_1 != '' && value_1 === value_2 && value_2 === value_3){
      return true;
    }
    // Check if all content in row 2 are the same 4 5 6 => 15
    if(value_4 != '' && value_4 === value_5 && value_5 === value_6){
      return true;
    }
    // Check if all content in row 3 are the same 7 8 9 => 24
    if(value_7 != '' && value_7 === value_8 && value_8 === value_9){
      return true;
    }

    // Check if all content in column 1 are the same 1 4 7 => 12
    if(value_1 != '' && value_1 === value_4 && value_4 === value_7){
      return true;
    }
    // Check if all content in column 2 are the same 2 5 8 => 15
    if(value_2 != '' && value_2 === value_5 && value_5 === value_8){
      return true;
    }
    // Check if all content in column 3 are the same 3 6 9 => 18
    if(value_3 != '' && value_3 === value_6 && value_6 === value_9){
      return true;
    }

    // Check if all content in diagonal 1 are the same 1 5 9 => 15
    if(value_1 != '' && value_1 === value_5 && value_5 === value_9){
      return true;
    }
    // Check if all content in diagonal 2 are the same 3 5 7 => 15
    if(value_3 != '' && value_3 === value_5 && value_5 === value_7){
      return true;
    }

    // No winner detected
    return false;
  }

  startGame();

});
