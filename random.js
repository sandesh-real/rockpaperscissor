let player1 = prompt("Enter any type");

let typeColl = ["rock", "paper", "scissor"];

function generateType(data) {
  let randomValue = Math.floor(Math.random() * data.length);
  return data[randomValue];
}
let player2;
player2 = generateType(typeColl);

let winOrlose = true;

while (winOrlose) {
  if (player1 === player2) {
    alert(`your game is draw , ${player1} and ${player2}`);
    player1 = prompt("Enter any type");
    player2 = generateType(typeColl);
  } else if (
    (player1 === "rock" && player2 === "paper") ||
    (player1 === "paper" && player2 === "scissor") ||
    (player1 === "scissor" && player2 === "rock")
  ) {
    alert(`player 2 wins, ${player1} and ${player2}`);
    winOrlose = false;
  } else {
    alert(`player 1 wins , ${player1} and ${player2}`);
    winOrlose = false;
  }
}
//guessing game
let player1 = {
  name: "player1",

  winCount: 0,
  loseCount: 0,
};
let player2 = {
  name: "player2",

  winCount: 0,
  loseCount: 0,
};

let player1Guess = Number(prompt("Enter number player1"));
let player2Guess = Number(prompt("Enter number player2"));

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 21);
  return randomNumber;
}
let randomNumber = generateRandomNumber();

function clearPlayerScore() {
  player1Guess = 0;
  player2Guess = 0;
}

while (true) {
  if (player1Guess === randomNumber) {
    player1.winCount++;
    player2.loseCount++;
    alert(
      `player 1 wins by guessing ${player1Guess} same number as computer i.e ${randomNumber}
      , player1winCounts=${player1.winCount} player1loseCounts=${player1.loseCount} 
      `
    );
    clearPlayerScore();
    randomNumber = generateRandomNumber();
  } else if (player2Guess === randomNumber) {
    player2.winCount++;
    player1.loseCount++;
    alert(
      `player 2 wins by guessing ${player2Guess} same number as computer i.e ${randomNumber}
      , player2winCounts=${player2.winCount} player2loseCounts=${player2.loseCount} 
      `
    );
    clearPlayerScore();
    randomNumber = generateRandomNumber();
  } else if (player1Guess < randomNumber || player2Guess < randomNumber) {
    if (player1Guess < randomNumber) {
      player1Guess = Number(
        prompt(
          `player 1 enter ${player1Guess} lower than randomnumber so guess higher`
        )
      );
    } else {
      player1Guess = Number(
        prompt(
          `player 1 enter ${player1Guess} greater than randomnumber so guess lower`
        )
      );
    }

    if (player2Guess < randomNumber) {
      player2Guess = Number(
        prompt(
          `player 2 enter ${player2Guess} lower than randomnumber so guess higher`
        )
      );
    } else {
      player2Guess = Number(
        prompt(
          `player 2 enter ${player2Guess}  greater than randomnumber so guess lower`
        )
      );
    }
  } else {
    player1Guess = Number(
      prompt(
        `player 1 enter ${player1Guess} higher than randomnumber so guess lower`
      )
    );
    player2Guess = Number(
      prompt(
        `player 2 enter ${player2Guess}  higher than randomnumber so guess lower`
      )
    );
  }
}
