btn = document.getElementById("btn");
function dice() {
  var dice1 = document.getElementById("dice1");
  var dice2 = document.getElementById("dice2");
  var num1 = Math.floor(Math.random() * 6) + 1;
  var num2 = Math.floor(Math.random() * 6) + 1;

  switch (num1) {
    case 1:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateY(0deg)";

      break;
    case 2:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateY(-90deg)";

      break;
    case 3:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateX(180deg)";

      break;
    case 4:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateY(90deg)";

      break;
    case 5:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateX(-90deg)";

      break;
    case 6:
      dice1.style.transition = "transform 0.3s linear 0s";
      dice1.style.transform = "rotateX(90deg)";
  }
  switch (num2) {
    case 1:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateY(0deg)";
      break;
    case 2:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateY(-90deg)";
      break;
    case 3:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateX(180deg)";
      break;
    case 4:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateY(90deg)";
      break;
    case 5:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateX(-90deg)";
      break;
    case 6:
      dice2.style.transition = "transform 0.3s linear 0s";
      dice2.style.transform = "rotateX(90deg)";
  }
}

btn.addEventListener("click", dice);
