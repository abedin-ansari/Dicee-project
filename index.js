var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber + ".png";

var randomImgSrc = "IMAGES/"+ randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "IMAGES/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if(randomNumber > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins🏆";
}
else if(randomNumber < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins🏆";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

