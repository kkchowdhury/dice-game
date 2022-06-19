
var random_no_1 = Math.floor(Math.random() * 6) + 1; 

var src1 = "dice" + random_no_1 + ".png";

 document.querySelectorAll("img")[0].setAttribute("src",src1);


var random_no_2 = Math.floor(Math.random() * 6) + 1;

var src2 = "dice" + random_no_2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",src2);


if (random_no_1 > random_no_2) {
  document.querySelector("h1").innerHTML = "★Player 1 wins the game!";
}
else if (random_no_2 > random_no_1) {
  document.querySelector("h1").innerHTML = "★Player 2 wins the game!";
}
else {
  document.querySelector("h1").innerHTML = "Draw Match!";
}
