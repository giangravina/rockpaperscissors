var playerName1 = 'Geoffrey';
var playerName2 = 'Joseph';
var playerWins1 = 0;
var playerWins2 = 0;

while(playerWins1 < 3 && playerWins2 < 3){
	var weapons = ['rock' , 'paper', 'scissors'];

	var weaponOfChoice1 = weapons[parseInt(Math.random()*weapons.length) %3];
	var weaponOfChoice2 = weapons[parseInt(Math.random()*weapons.length) %3];

	console.log(weaponOfChoice1 + ' vs. ' + weaponOfChoice2);

	if(weaponOfChoice1 != weaponOfChoice2){
		if(weaponOfChoice1 == 'rock'){
			if(weaponOfChoice2 == 'paper'){
				playerWins2++;
			}else if(weaponOfChoice2 == 'scissors'){
				playerWins1++;
			}
		}else if(weaponOfChoice1 == 'paper'){
			if(weaponOfChoice2 == 'rock'){
				playerWins1++;
			}else if(weaponOfChoice2 == 'scissors'){
				playerWins2++;
			}
		}else if(weaponOfChoice1 == 'scissors'){
			if(weaponOfChoice2 == 'rock'){
				playerWins2++;
			}else if(weaponOfChoice2 == 'paper'){
				playerWins1++;
			}
		}
	}
}

if(playerWins1 > playerWins2){
	console.log(playerName1 + ' wins!');
}else if(playerWins1 < playerWins2){
	console.log(playerName2 + ' wins!');
}else{
	console.log("It's a tie!");
}

// /updated rock papers scissors 



// var hands = ['rock', 'paper', 'scissors'];

// function getHand(){
// 	return hands[parseInt(Math.random() * hands.length) % 3];
// }

// var player1 = {
// 	name: 'Geoffrey',
// 	getHand: function(){
// 		return getHand();
// 	}
// }

// var player2 = {
// 	name: 'Joseph',
// 	getHand: function(){
// 		return getHand();
// 	}
// }

// function playRound(p1, p2){
// 	var weaponOfChoice1 = p1.getHand();
// 	var weaponOfChoice2 = p2.getHand();

// 	console.log(weaponOfChoice1 + ' vs. ' + weaponOfChoice2);

// 	if(weaponOfChoice1 != weaponOfChoice2){
// 		if(weaponOfChoice1 == 'rock'){
// 			if(weaponOfChoice2 == 'paper'){
// 				console.log(p2.name + ' wins this round!');
// 				return p2;
// 			}else if(weaponOfChoice2 == 'scissors'){
// 				console.log(p1.name + ' wins this round!');
// 				return p1;
// 			}
// 		}else if(weaponOfChoice1 == 'paper'){
// 			if(weaponOfChoice2 == 'rock'){
// 				console.log(p1.name + ' wins this round!');
// 				return p1;
// 			}else if(weaponOfChoice2 == 'scissors'){
// 				console.log(p2.name + ' wins this round!');
// 				return p2;
// 			}
// 		}else if(weaponOfChoice1 == 'scissors'){
// 			if(weaponOfChoice2 == 'rock'){
// 				console.log(p2.name + ' wins this round!');
// 				return p2;
// 			}else if(weaponOfChoice2 == 'paper'){
// 				console.log(p1.name + ' wins this round!');
// 				return p1;
// 			}
// 		}
// 	}else{
// 		console.log("It's a tie!");
// 		return null;
// 	}
// }

// function playGame(p1, p2, playUntil){
// 	var player1score = 0;
// 	var player2score = 0;

// 	while(player1score < playUntil && player2score < playUntil){
// 		var winner = playRound(p1, p2);

// 		if(winner != null){
// 			if(p1.name == winner.name){
// 				player1score++;
// 			}else if(p2.name == winner.name){
// 				player2score++;
// 			}
// 		}
// 	}

// 	if(player1score > player2score){
// 		console.log(p1.name + " wins!");
// 	}else if(player2score > player1score){
// 		console.log(p2.name + " wins!");
// 	}
// }

// playGame(player1, player2, 5);


