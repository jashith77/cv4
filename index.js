var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1+1;

var randomimage = "https://raw.githubusercontent.com/jashith77/cv4/master/dice"+randomNumber1+".png";
document.getElementsByTagName("img")[0].setAttribute("src", randomimage);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2+1;

var randomimage2 = "https://raw.githubusercontent.com/jashith77/cv4/master/dice"+randomNumber2+".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomimage2)

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 is the Winner";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 is the Winner";
}
else{
  document.querySelector("h1").innerHTML = "Its a Draw";
}
