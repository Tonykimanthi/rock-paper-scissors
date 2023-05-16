
let gameImages = [
    "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJvY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1597338770339-9860acd8406e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
];

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");

const imagesToChoose = document.querySelector(".images-to-choose").children

const rockContainer = document.querySelector(".rock");
const paperContainer = document.querySelector(".paper");
const scissorContainer = document.querySelector(".scissor");

let randomImage = Math.floor(Math.random() * gameImages.length)

computer.style.backgroundImage = `url(${gameImages[randomImage]})`
computer.style.backgroundPosition = "top";
computer.style.backgroundSize = "cover";
computer.style.backgroundRepeat = "no-repeat";

imagesToChoose.style.backgroundImage = `url(${gameImages[randomImage]})`

console.log(imagesToChoose)