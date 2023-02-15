function rollDice(){
  const diceType = document.getElementById("dice-type").value;
  const diceValue = Math.floor((Math.random()*Number(diceType))+1);
  const diceImageLink = `images/d${diceType}-${diceValue}-icon.png`;
  const diceImage = document.querySelector("img");
  const diceHeader = document.getElementById("dice__number--header");
  const newDiceHeader = document.getElementById("new__dice");
  diceImage.src = `images/d${diceType}-${diceValue}-icon.png`;
  diceHeader.style.display = "none";
  newDiceHeader.textContent= `D${diceType}`;
}