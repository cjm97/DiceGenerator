// dice generators
function d4Generator() {
  let numberGen = Math.floor(Math.random() * 4 + 1);
  return numberGen;
}
function d6Generator() {
  let numberGen = Math.floor(Math.random() * 6 + 1);
  return numberGen;
}
function d8Generator() {
  let numberGen = Math.floor(Math.random() * 8 + 1);
  return numberGen;
}
function d10Generator() {
  let numberGen = Math.floor(Math.random() * 10 + 1);
  return numberGen;
}
function d12Generator() {
  let numberGen = Math.floor(Math.random() * 12 + 1);
  return numberGen;
}
function d20Generator() {
  let numberGen = Math.floor(Math.random() * 20 + 1);
  return numberGen;
}

// dice roll function
function rollDice() {
  let selectedDice = document.getElementById("select").value;
  selectedDice = Number(selectedDice);
  let spanDice = "D" + selectedDice;
  const diceImage = document.querySelector("img");
  if (selectedDice === 4) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d4Roll = d4Generator();
    if (d4Roll === 1) {
      diceImage.src = "images/d4-1-icon.png";
    } else if (d4Roll === 2) {
      diceImage.src = "images/d4-2-icon.png";
    } else if (d4Roll === 3) {
      diceImage.src = "images/d4-3-icon.png";
    } else if (d4Roll === 4) {
      diceImage.src = "images/d4-4-icon.png";
    }
  } else if (selectedDice === 6) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d6Roll = d6Generator();
    if (d6Roll === 1) {
      diceImage.src = "images/d6-1-icon.png";
    } else if (d6Roll === 2) {
      diceImage.src = "images/d6-2-icon.png";
    } else if (d6Roll === 3) {
      diceImage.src = "images/d6-3-icon.png";
    } else if (d6Roll === 4) {
      diceImage.src = "images/d6-4-icon.png";
    } else if (d6Roll === 5) {
      diceImage.src = "images/d6-5-icon.png";
    } else if (d6Roll === 6) {
      diceImage.src = "images/d6-6-icon.png";
    }
  } else if (selectedDice === 8) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d8roll = d8Generator();
    if (d8roll === 1) {
      diceImage.src = "images/d8-1-icon.png";
    } else if (d8roll === 2) {
      diceImage.src = "images/d8-2-icon.png";
    } else if (d8roll === 3) {
      diceImage.src = "images/d8-3-icon.png";
    } else if (d8roll === 4) {
      diceImage.src = "images/d8-4-icon.png";
    } else if (d8roll === 5) {
      diceImage.src = "images/d8-5-icon.png";
    } else if (d8roll === 6) {
      diceImage.src = "images/d8-6-icon.png";
    } else if (d8roll === 7) {
      diceImage.src = "images/d8-7-icon.png";
    } else if (d8roll === 8) {
      diceImage.src = "images/d8-8-icon.png";
    }
  } else if (selectedDice === 10) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d10roll = d10Generator();
    if (d10roll === 1) {
      diceImage.src = "images/d8-1-icon.png";
    } else if (d10roll === 2) {
      diceImage.src = "images/d8-2-icon.png";
    } else if (d10roll === 3) {
      diceImage.src = "images/d8-3-icon.png";
    } else if (d10roll === 4) {
      diceImage.src = "images/d8-4-icon.png";
    } else if (d10roll === 5) {
      diceImage.src = "images/d8-5-icon.png";
    } else if (d10roll === 6) {
      diceImage.src = "images/d8-6-icon.png";
    } else if (d10roll === 7) {
      diceImage.src = "images/d8-7-icon.png";
    } else if (d10roll === 8) {
      diceImage.src = "images/d8-8-icon.png";
    } else if (d10roll === 9) {
      diceImage.src = "images/d10-9-icon.png";
    } else if (d10roll === 10) {
      diceImage.src = "images/d10-10-icon.png";
    }
  } else if (selectedDice === 12) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d12roll = d12Generator();
    if (d12roll === 1) {
      diceImage.src = "images/d12-1-icon.png";
    } else if (d12roll === 2) {
      diceImage.src = "images/d12-2-icon.png";
    } else if (d12roll === 3) {
      diceImage.src = "images/d12-3-icon.png";
    } else if (d12roll === 4) {
      diceImage.src = "images/d12-4-icon.png";
    } else if (d12roll === 5) {
      diceImage.src = "images/d12-5-icon.png";
    } else if (d12roll === 6) {
      diceImage.src = "images/d12-6-icon.png";
    } else if (d12roll === 7) {
      diceImage.src = "images/d12-7-icon.png";
    } else if (d12roll === 8) {
      diceImage.src = "images/d12-8-icon.png";
    } else if (d12roll === 9) {
      diceImage.src = "images/d12-9-icon.png";
    } else if (d12roll === 10) {
      diceImage.src = "images/d12-10-icon.png";
    } else if (d12roll === 11) {
      diceImage.src = "images/d12-11-icon.png";
    } else if (d12roll === 12) {
      diceImage.src = "images/d12-12-icon.png";
    }
  } else if (selectedDice === 20) {
    document.getElementById("dice__number--header").style.display = "none";
    document.getElementById("new__dice").textContent = spanDice;
    let d20roll = d20Generator();
    if (d20roll === 1) {
      diceImage.src = "images/d20-1-icon.png";
    } else if (d20roll === 2) {
      diceImage.src = "images/d20-2-icon.png";
    } else if (d20roll === 3) {
      diceImage.src = "images/d20-3-icon.png";
    } else if (d20roll === 4) {
      diceImage.src = "images/d20-4-icon.png";
    } else if (d20roll === 5) {
      diceImage.src = "images/d20-5-icon.png";
    } else if (d20roll === 6) {
      diceImage.src = "images/d20-6-icon.png";
    } else if (d20roll === 7) {
      diceImage.src = "images/d20-7-icon.png";
    } else if (d20roll === 8) {
      diceImage.src = "images/d20-8-icon.png";
    } else if (d20roll === 9) {
      diceImage.src = "images/d20-9-icon.png";
    } else if (d20roll === 10) {
      diceImage.src = "images/d20-10-icon.png";
    } else if (d20roll === 11) {
      diceImage.src = "images/d20-11-icon.png";
    } else if (d20roll === 12) {
      diceImage.src = "images/d20-12-icon.png";
    } else if (d20roll === 13) {
      diceImage.src = "images/d20-13-icon.png";
    } else if (d20roll === 14) {
      diceImage.src = "images/d20-14-icon.png";
    } else if (d20roll === 15) {
      diceImage.src = "images/d20-15-icon.png";
    } else if (d20roll === 16) {
      diceImage.src = "images/d20-16-icon.png";
    } else if (d20roll === 17) {
      diceImage.src = "images/d20-17-icon.png";
    } else if (d20roll === 18) {
      diceImage.src = "images/d20-18-icon.png";
    } else if (d20roll === 19) {
      diceImage.src = "images/d20-19-icon.png";
    } else if (d20roll === 20) {
      diceImage.src = "images/d20-20-icon.png";
    }
  }
}
