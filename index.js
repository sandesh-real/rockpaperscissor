function PlayerInfo() {
  this.win = 0;
  this.lose = 0;
}
let player1Info = new PlayerInfo();
let player2Info = new PlayerInfo();

let imgColl = document.querySelectorAll(".image");
let playerOneEmptyImage = document.querySelector(".playerOneImage").src;
let playerTwoEmptyImage = document.querySelector(".playerTwoImage").src;

imgColl.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelector(".playerOneImage").src = e.target.currentSrc;
    document.querySelector(".playerOneImage").id = e.target.id;
  });
});
console.log(
  document.querySelector(".playerOneImage").src === playerOneEmptyImage
);

document.querySelector(".playbtn").addEventListener("click", (e) => {
  if (document.querySelector(".playerOneImage").src !== playerOneEmptyImage) {
    let interval = setInterval(() => {
      let ran = Math.floor(Math.random() * imgColl.length);
      document.querySelector(".playerTwoImage").src = imgColl[ran].currentSrc;
      document.querySelector(".playerTwoImage").id = imgColl[ran].id;
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
      let player1Id = document.querySelector(".playerOneImage").id;
      let player2Id = document.querySelector(".playerTwoImage").id;
      console.log(player1Id, player2Id);
      if (player1Id === player2Id) {
        document.querySelector(".Vs").textContent = "Draw";
      } else if (
        (player1Id === "paper" && player2Id === "rock") ||
        (player1Id === "rock" && player2Id === "scissor") ||
        (player1Id === "scissor" && player2Id === "paper")
      ) {
        player1Info.win++;
        player2Info.lose++;
        document.querySelector(".playerOneWinScore").textContent =
          player1Info.win;
        document.querySelector(".playerTwoLoseScore").textContent =
          player2Info.lose;

        document.querySelector(".Vs").textContent = "Player One wins";
        document
          .querySelector(".player1Container")
          .classList.add("travelWiner");
        document
          .querySelector(".player2Container")
          .classList.add("travelLoser");
        document.querySelector(".playerTwoImage").classList.add("rotate");
      } else {
        player2Info.win++;
        player1Info.lose++;
        document.querySelector(".playerTwoWinScore").textContent =
          player2Info.win;
        document.querySelector(".playerOneLoseScore").textContent =
          player1Info.lose;
        document.querySelector(".Vs").textContent = "Computer wins";
        document
          .querySelector(".player2Container")
          .classList.add("travelWiner");
        document
          .querySelector(".player1Container")
          .classList.add("travelLoser");
        document.querySelector(".playerOneImage").classList.add("rotate");
      }

      document.querySelector(".playbtn").classList.add("hide");
      document.querySelector(".playagain").classList.remove("hide");
      // document.querySelector(".playagain").classList.remove("playbtn");
      // document.querySelector(".playagain")
    }, 2000);
  }
});

document.querySelector(".restartBtn").addEventListener("click", () => {
  window.location.reload();
});

if (document.querySelector(".playagain")) {
  document.querySelector(".playagain").addEventListener("click", () => {
    document.querySelector(".playerOneImage").src = playerOneEmptyImage;
    document.querySelector(".playerTwoImage").src = playerTwoEmptyImage;
    document.querySelector(".Vs").textContent = "VS";
    document.querySelector(".playagain").classList.add("hide");
    document.querySelector(".playbtn").classList.remove("hide");
  });
}
