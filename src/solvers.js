/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  for (var i = 0; i < n; i++) {
    solution.push(new Array(n))
    solution[i][i] = 1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  // instantiate new Board
  // iterate through the Board
    // toggle a new piece at position on the Board
    // skip to the next row
    // if there are any rook conflicts in the next row, then toggle new piece

    // create a starting piece and set it at a starting position
    // it'll go through each row and column, checking for conflicts
    // if it is able to place a piece down
    // put a piece down
    // once a solution is found
    // toggle off the pieces
    // increment the starting piece to the next row column



    // if the first piece that we placed exists in the same row as the next piece
    // move onto the next row
    // if the first piece that we placed exists in the same column as the next piece
    // move to the next column
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = this.rows(n); //fixme
  console.log(solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
