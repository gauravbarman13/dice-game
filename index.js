// ---------------------first player image----------------------------------------------------
var randomNumber1=Math.floor(Math.random()*6)+1; //generating random number from 1 to 6
var randomImageSelector1="images/"+"dice"+randomNumber1+".png"; //random image selecting from image folder
var image1=document.querySelectorAll("img")[0]; //selecting the image that we want to change using dom

image1.setAttribute("src", randomImageSelector1); //changing the image with random image
// ----------------------second player image---------------------------------------------------
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSelector2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSelector2);

// changing text if any one of the player won------------------------------------------------------

if(randomNumber1>randomNumber2){
  message=document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
  message=document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
  message=document.querySelector("h1").innerHTML="its a Tie , Play Again";
}
