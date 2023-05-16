
let gameImages = [
    "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1597338770339-9860acd8406e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
];

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const imagesToChoose = document.querySelector(".images-to-choose")

const rockContainer = document.querySelector(".rock");
const paperContainer = document.querySelector(".paper");
const scissorContainer = document.querySelector(".scissor");

let randomImage = Math.floor(Math.random() * gameImages.length)

computer.style.backgroundImage = `url(${gameImages[randomImage]})`
computer.style.backgroundPosition = "top";
computer.style.backgroundSize = "cover";
computer.style.backgroundRepeat = "no-repeat";

// Player image
player.style.backgroundPosition = "top";
player.style.backgroundSize = "cover";
player.style.backgroundRepeat = "no-repeat";

// Creating image containers
const rock = document.createElement("div")
imagesToChoose.appendChild(rock);
rock.style.border = "1px solid"
rock.style.width = "10em"
rock.style.height = "10em"
rock.style.backgroundImage = `url(${gameImages[0]})`
rock.style.backgroundPosition = "top";
rock.style.backgroundSize = "cover";
rock.style.backgroundRepeat = "no-repeat";
rock.classList.add("clicked-image")


const paper = document.createElement("div")
imagesToChoose.appendChild(paper);
paper.style.border = "1px solid"
paper.style.width = "10em"
paper.style.height = "10em"
paper.style.backgroundImage = `url(${gameImages[1]})`
paper.style.backgroundPosition = "top";
paper.style.backgroundSize = "cover";
paper.style.backgroundRepeat = "no-repeat";
paper.classList.add("clicked-image")

const scissor = document.createElement("div")
imagesToChoose.appendChild(scissor);
scissor.style.border = "1px solid"
scissor.style.width = "10em"
scissor.style.height = "10em"
scissor.style.backgroundImage = `url(${gameImages[2]})`
scissor.style.backgroundPosition = "top";
scissor.style.backgroundSize = "cover";
scissor.style.backgroundRepeat = "no-repeat";
scissor.classList.add("clicked-image")

console.log(rock)
let imageChose = document.querySelectorAll(".clicked-image") 
imageChose.forEach(function(image){
    image.addEventListener("click", function(){
        const source = image.style.backgroundImage
        player.style.backgroundImage = `${source}`
    })
})