const squares = document.querySelectorAll(".square");
const correct = document.querySelector(".correct");
const colorcode = document.querySelector("h1");
const button = document.querySelector("button");

let colours = [];

GenerateRandomColour();
assign_colours();

function GenerateRandomColour() {
  for (let i = 0; i < squares.length; i++) {
    colours.push(
      `rgb(${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)})`
    );
    console.log(colours);
  }
}

function assign_colours() {
  colours.forEach((colour, i) => {
    squares[i].style.background = colour;
    squares[i].setAttribute("data-colour", colour);
  });
}

function getRandomPickedColour() {
  const randomColour = colours[Math.floor(Math.random() * colours.length)];
  console.log(randomColour);
  colorcode.textContent = randomColour;
  return randomColour;
}

function CheckColour() {
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (e.target.dataset.colour === pickedColour) {
        correct.textContent = "correct ";
        correct.style.color = "green";
      } else {
        correct.textContent = "wrong";
        correct.style.color = "red";
        e.target.classList.add("fade");
      }
    });
  });
}

let pickedColour = getRandomPickedColour();

function reset() {
  colours = [];
  GenerateRandomColour();
  squares.forEach((square) => square.classList.remove("fade"));
  assign_colours();
  CheckColour();
  pickedColour = getRandomPickedColour();
}

button.addEventListener("click", reset);
