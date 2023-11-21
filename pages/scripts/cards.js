const playerName = document.querySelector(".playerName")
const storangePlayerName = localStorage.getItem("@memory_Game:player_name")
playerName.innerHTML = storangePlayerName
console.log(playerName.innerHTML);