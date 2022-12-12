

var randomNumber1 = math.floor(math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelector("img1")[0];

image1.setAttribute("src"; "randomDiceImage");
