$(function(){
var current = ['o','x','o','x','o','x','o','x','o','x','o','x','o'];
var board = [];
var combos = [['0','3','6'],['1', '4', '7'],['2','5','8'],['0','1','2'],['3','4','5'],['6','7','8'],['0','4','8'],['2','4','6']];
var isO = function(element, index, array){
	return board[element] === 'o';
}
var isX = function(element, index, array){
	return board[element] === 'x';
}
$('td').click(function(){
	var turn = current.pop();
	this.append(turn);
	board[this.className] = turn;
	for(var i = 0; i < combos.length; i++){
		var winner;
		if(combos[i].every(isO)){
			var winner = 'o';
			alert('o wins!');
		} else if (combos[i].every(isX)){
			var winner = 'x';
			alert('x wins!');
		}
		if(winner){
			board = [];
			current = ['o','x','o','x','o','x','o','x','o','x','o','x','o'];
			$('td').html('');
		}
	}
});
});
