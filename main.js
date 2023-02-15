function rollDice(){
  const diceType = document.getElementById("dice-type").value;
  const diceValue = Math.floor((Math.random()*Number(diceType))+1);
  const diceImageLink = `images/d${diceType}-${diceValue}-icon.png`;
  const diceImage = document.querySelector("img");
  diceImage.src = `images/d${diceType}-${diceValue}-icon.png`;
}