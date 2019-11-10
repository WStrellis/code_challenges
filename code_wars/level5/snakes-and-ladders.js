'use stric';
/*  https://www.codewars.com/kata/snakes-and-ladders-1   */

class SnakeLadders {
  constructor(){
    this.player1 = {
      name : "Player1",
      score : 0
    };
    this.player2 = {
      name : "Player2",
      score : 0
    };
    this.currentPlayer = this.player1;
    this.lastPlayer = null,
    this.ladders = new Map([
      [ 2, 38 ] , 
      [ 7 , 14 ],
      [ 8 , 31 ],
      [ 15 , 26 ],
      [ 21 , 42 ],
      [ 28 , 84 ],
      [ 36 , 44 ],
      [ 51 , 67 ],
      [ 78 , 98 ],
      [ 71 , 91 ],
    ]);
    this.snakes = new Map([
      [ 16 , 6 ],
      [ 49 , 11 ],
      [ 46 ,  25 ],
      [ 62 , 19 ],
      [ 64 , 60 ],
      [ 74 , 53 ],
      [ 89 , 68 ],
      [ 92 , 88 ],
      [ 95 , 75 ],
      [ 99 , 80 ]
    ])
  }

  play( die1, die2 ) {
    // check if the game is over
    if( this.lastPlayer.score === 100 ){
      return "Game Over!";
    } else{
      // sum the dice
      let move = die1 + die2;
    
      // move the player
      // check if they landed on a snake 

      //check if they landed on a ladder

      // check for win condition
      ( (this.currentPlayer.score + move) > 100 )? this.currentPlayer.score = 100 - (move - ( 100 - this.currentPlayer.score)): this.currentPlayer.score += move;

      // if diceSum + player > 100 move the player back
      if( this.currentPlayer.score === 100) `${ this.currentPlayer.name } Wins!`;

      // log player's current position

      // switch players
      if( this.currentPlayer === this.player1){
        this.currentPlayer = this.player2;
        this.lastPlayer = this.player1;
      }else{
        this.currentPlayer = this.player1;
        this.lastPlayer = this.player2;
      }
      
      return `${this.lastPlayer.name} is on square ${ this.lastPlayer.score }.`;
    }
  } // end play

}
