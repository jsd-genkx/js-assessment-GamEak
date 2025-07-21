"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		clear();

		// Replace with your own code //
		// console.log(this.field); // Please REMOVE this line before you start your code!

		// for(let row of this.field){console.log(row.join(" "));}
		for(let i=0; i<this.field.length; i++){console.log(this.field[i].join(' '));}

	}

	// Your Code //

	// action field
	actionPlayer(){
		let action=prompt("Which way? (U, D, L, R): ").toUpperCase();
		if(action==="U"){this.positionRow--;}
		else if(action==="D"){this.positionRow++;}
		else if(action==="L"){this.positionCol--}
		else if(action==="R"){this.positionCol++}
		else{console.log("Use U, D, L, or R to move.");}

		if(this.positionRow<0||
			this.positionRow>=3 /*ใช้ตำแหน่ง index ของ array EX. 3 หรือ this.field.length ก็ได้*/ ||
			this.positionCol<0||
			this.positionCol>= this.field[0].length
		){
			console.log('Game Over \n "You fell of the map!"');
		}

		if(pathCharacter===hat){console.log('Win \n "You found your hat!"');}
		else if(pathCharacter===hat){console.log('Game Over \n "You fell in a hole!"');}

	}


}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
