let gameImages = [
  "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1597338770339-9860acd8406e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
];

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const imagesToChoose = document.querySelector(".images-to-choose");

const refreshBtn = document.getElementById("refresh-btn");

let randomImage = Math.floor(Math.random() * gameImages.length);

// Player image
player.style.backgroundPosition = "top";
player.style.backgroundSize = "cover";
player.style.backgroundRepeat = "no-repeat";

// Creating image containers
const rock = document.createElement("div");
imagesToChoose.appendChild(rock);
rock.style.width = "33%";
rock.style.height = "10";
rock.style.backgroundImage = `url(${gameImages[0]})`;
rock.style.backgroundPosition = "top";
rock.style.backgroundSize = "cover";
rock.style.backgroundRepeat = "no-repeat";
rock.style.borderRadius = "8px";
rock.style.cursor = "pointer";
rock.classList.add("clicked-image");

const paper = document.createElement("div");
imagesToChoose.appendChild(paper);
paper.style.width = "33%";
paper.style.height = "10em";
paper.style.backgroundImage = `url(${gameImages[1]})`;
paper.style.backgroundPosition = "top";
paper.style.backgroundSize = "cover";
paper.style.backgroundRepeat = "no-repeat";
paper.style.borderRadius = "8px";
paper.style.cursor = "pointer";
paper.classList.add("clicked-image");

const scissor = document.createElement("div");
imagesToChoose.appendChild(scissor);
scissor.style.width = "33%";
// scissor.style.height = "10em";
scissor.style.backgroundImage = `url(${gameImages[2]})`;
scissor.style.backgroundPosition = "top";
scissor.style.backgroundSize = "cover";
scissor.style.backgroundRepeat = "no-repeat";
scissor.style.borderRadius = "8px";
scissor.style.cursor = "pointer";
scissor.classList.add("clicked-image");

let imageChose = document.querySelectorAll(".clicked-image");

imageChose.forEach(function (image) {
  image.addEventListener("click", function () {
    const score = document.getElementById("score");

    const playerChose = image.style.backgroundImage;
    player.style.backgroundImage = `${playerChose}`;
    player.classList.add("animate-moveRight");

    computer.style.backgroundImage = `url(${gameImages[randomImage]})`;
    computer.style.backgroundPosition = "top";
    computer.style.backgroundSize = "cover";
    computer.style.backgroundRepeat = "no-repeat";
    computer.classList.add("moveLeft");

    const computerChose = computer.style.backgroundImage;

    let scoreCount = 0;
    let storeCount = '';
    let playerScore = document.getElementById("player-score");

    if (playerChose === computerChose) {
      score.innerText = "Tie";
      score.style.color = "green";
    } else if (
      playerChose.includes(gameImages[0]) &&
      computerChose.includes(gameImages[1])
    ) {
      score.innerText = "You lose";
      score.style.color = "red";
    } else if (
      playerChose.includes(gameImages[0]) &&
      computerChose.includes(gameImages[2])
    ) {
      if (localStorage.getItem("storeScore")) {    //Working on it
        let localS = localStorage.getItem("storeScore");
        let parsedData = JSON.parse(localS);
        playerScore.innerText = parsedData;
        console.log(parsedData);
      } else {
        scoreCount++;
        playerScore.innerText = scoreCount;
        storeCount.push(scoreCount);
        localStorage.setItem("storeScore", JSON.stringify(storeCount));
      }
      score.innerText = "You win";
      score.style.color = "blue";
    } else if (
      playerChose.includes(gameImages[1]) &&
      computerChose.includes(gameImages[0])
    ) {
      score.innerText = "You win";
      score.style.color = "blue";
    } else if (
      playerChose.includes(gameImages[1]) &&
      computerChose.includes(gameImages[2])
    ) {
      score.innerText = "You lose";
      score.style.color = "red";
    } else if (
      playerChose.includes(gameImages[2]) &&
      computerChose.includes(gameImages[0])
    ) {
      score.innerText = "You lose";
      score.style.color = "red";
    } else if (
      playerChose.includes(gameImages[2]) &&
      computerChose.includes(gameImages[1])
    ) {
      score.innerText = "You win";
      score.style.color = "blue";
    }

    // rock.style.pointerEvents = "none";
    // paper.style.pointerEvents = "none";
    // scissor.style.pointerEvents = "none";
  });
});

