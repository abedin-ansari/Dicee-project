document.getElementById("rollButton").addEventListener("click", function() {
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImg = "dice" + randomNumber + ".jpg";
    var randomImgSrc = "images/" + randomDiceImg;
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", randomImgSrc);
  
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImgSrc2 = "images/dice" + randomNumber2 + ".jpg";
    var img2 = document.querySelector(".img2");
    img2.setAttribute("src", randomImgSrc2);
  
    
    if (randomNumber > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins🏆";
    } else if (randomNumber < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 wins🏆";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  });
  