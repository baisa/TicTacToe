var array = ['', '', '', '', '', '', '', '', ''];
var game = function () {
    var user = prompt("Are you x or o ?").toUpperCase();
    $('.box').click(function () {
        var box_id = $(this).attr('id');
        console.log(user);
        while (array[parseInt(box_id)] === '') {
            $(this).append("<div class='inner'>" + user + "</div>");
            //var box_id = $(this).attr('id');
            array[parseInt(box_id)] = user;
        }
        user = (user === 'X') ? 'O' : 'X'
        if (!isGameWon() && $('#container .inner').length === 9) {
            $('#container').after("<div class='winner'> You have got a tie! </div>");
        }
    });
}

var winnerX = function () {
    $('#container').after("<div class='winner'> Congratulations, X, you won!</div>");  
}
var winnerO = function () {
    $('#container').after("<div class='winner'> Congratulations, O, you won!</div>");
}
var isGameWon = function () {
    if (array[0] === 'X' && array[1] === 'X' && array[2] === 'X') {
        winnerX()
        return true;
    } else if (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') {
        winnerX()
        return true;
    } else if (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') {
        winnerX()
        return true;
    } else if (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') {
        winnerX()
        return true;
    } else if (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') {
        winnerX()
        return true;
    } else if (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') {
        winnerX()
        return true;
    } else if (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') {
        winnerX()
        return true;
    } else if (array[2] === 'X' && array[4] === 'X' && array[6] === 'X') {
        winnerX()
        return true;
    } else if (array[0] === 'O' && array[1] === 'O' && array[2] === 'O') {
       winnerO()
       return true;
    } else if (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') {
        winnerO()
        return true;
    } else if (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') {
        winnerO()
        return true;
    } else if (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') {
        winnerO()
        return true;
    } else if (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') {
        winnerO()
        return true;
    } else if (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') {
        winnerO()
        return true;
    } else if (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') {
        winnerO()
        return true;
    } else if (array[2] === 'O' && array[4] === 'O' && array[6] === 'O') {
        winnerO()
        return true;
    }
}

$(document).ready(function(){
  game()
});