const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const computerHand = document.getElementById("computerHand");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");

// define weapons array
const weapons = ["rock", "paper", "scissors"];

// initialize state variables
let tools = "";
let com = "";
let result = "";

// add event listeners to the buttons
rockBtn.addEventListener("click", function() { play("rock"); });
paperBtn.addEventListener("click", function() { play("paper"); });
scissorsBtn.addEventListener("click", function() { play("scissors"); });
restartBtn.addEventListener("click", function() { restart(); });

// play the game with the selected weapon
function play(weapon) {
 tools = weapon;
 com = weapons[Math.floor(Math.random() * weapons.length)];
 computerHand.src = `images/${com}.png`;
 result = getResult(tools, com);
 resultText.innerHTML = result;
 restartBtn.style.display = "block";
}

// determine the result of the game
function getResult(tools, com) {
 if (tools === com) {
  return "It's loose!";
 } else if (
  (tools === "rock" && com === "scissors") || 
  (tools === "paper" && com === "rock") ||
  (tools === "scissors" && com === "paper")
 ) {
  return "Player wins!";
 } else {
  return "tools wins!";
 }
}

// restart the game by resetting the state variables and hiding the restart button
function restart() {
 tools = "";
 com = "";
 result = "";
 resultText.innerHTML = "play tools!";
 restartBtn.style.display = "none";
}

// initialize the game
restart();
