const inputName = document.querySelector(".inputName");
const newGameButton = document.querySelector(".newGameButton");
const newGameForm = document.querySelector(".newGameForm")
console.log(inputName);
function validateInput(event) {
//   console.log(event.target);
  if (event.target.value.length >= 3) {
    newGameButton.removeAttribute("disabled");
  } else {
    newGameButton.setAttribute("disabled", "true");
  }
}
function handleSubmitNewGame(event) {
    event.preventDefault();
    console.log(inputName.value);
    localStorage.setItem("@memory_Game:player_name", inputName.value)
    inputName.value = "";
    window.location.href = "pages/cards.html"
  }
inputName.addEventListener("input", validateInput);
newGameForm.addEventListener("submit", handleSubmitNewGame);
