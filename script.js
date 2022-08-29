var board = document.querySelectorAll(".tile");
var restartBtn = document.getElementById("restart");
var h2 = document.getElementById('head2');
var winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
var turn = 1;
var plays = 0;

restartBtn.addEventListener("click", function () {
    plays = 0;
    h2.innerHTML = "";
    setBoard();
});

function setBoard() {
    board.forEach((b) => {
        b.innerText = "";
        b.disabled = false;
    });
}

function getWinner() {
    for (let i of winPatterns) {
        let t1 = board[i[0]].innerText;
        let t2 = board[i[1]].innerText;
        let t3 = board[i[2]].innerText;

        if (t1 != "" && (t2 != "") && (t3 != "") && (t1 == t2) && (t2 == t3)) {
            board.forEach((tile) => (tile.disabled = true));
            if (t1 == "X") {
                h2.innerHTML = "X WON!";
            } else {
                h2.innerHTML = "O WON!";
            }
        }
    }
}

board.forEach((tile) => {
    tile.addEventListener("click", function () {
        tile.disabled=true;
        if (turn == 1) {
            turn = 0;
            tile.innerText = "X";
        } else {
            turn = 1;
            tile.innerText = "O";
        }
        plays += 1;
        if (plays == 9) {
            board.forEach((b) => (b.disabled = true));
            h2.innerHTML = "DRAW!";
        }
        getWinner();
    });
});
window.onload = setBoard;