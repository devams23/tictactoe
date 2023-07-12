
var n1 = localStorage.getItem("player1");
var n2 = localStorage.getItem("player2");
var divElement = document.querySelector(".game-board");
// Display player names in the game
var playerNamesElement = document.getElementById("playerNames");
// playerNamesElement.innerHTML = "Player 1: " + player1Name + "<br>Player 2: " + player2Name;
// Use player names in your tic-tac-toe game logic
console.log("Player 1 Name:", n1);
console.log("Player 2 Name:", n2);

document.querySelector("h1").innerHTML = "Tic-Tac-Toe";
document.querySelector("h2").innerHTML = n1 +"'"+"s"+" Turn " + "( X )";
count =1
function thestart(){
  
  for (var i = 0; i<9 ; i++){
    document.querySelectorAll(".box")[i].innerHTML = "";
  }

  // console.log(divElement.querySelectorAll(".box")[i].innerHTML ="");
  // for (var i = 0 ; i<9 ; i++)
  document.querySelector("h1").innerHTML = "Tic-Tac-Toe";
  document.querySelector("h2").innerHTML = n1 +"'"+"s" + " Turn " + "( X )";
  count = 1;
  console.log("play again");

}

  
divElement.addEventListener("click", function (event) {
  var clickedId = event.target.id;
  if (count % 2 == 0  && count <=9){
     document.querySelector("h2").innerHTML = n1 + "'" + "s" + " Turn " + "( X )";
     put(clickedId, "O");

   

  }
  else 
  {
    if(count <=9)
    {
      document.querySelector("h2").innerHTML = n2 + "'" + "s" + " Turn " + "( O )";
      put(clickedId, "X");
      
    }

  }
  if(document.querySelector("#o").innerHTML === "X" && document.querySelector("#t").innerHTML === "X" && document.querySelector("#th").innerHTML === "X"){
      document.querySelector("h1").innerHTML = n1 + " wins!";
      count = 9;
      
      var audio = new Audio("success.mp3");
      audio.play();

    
  }
  else if(document.querySelector("#f").innerHTML === "X" && document.querySelector("#fi").innerHTML === "X" && document.querySelector("#si").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;
    var audio = new Audio("success.mp3");
        audio.play();
  }
  else if(document.querySelector("#s").innerHTML === "X" && document.querySelector("#e").innerHTML === "X" && document.querySelector("#n").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;
    var audio = new Audio("success.mp3");
        audio.play();
  }
  else if(document.querySelector("#o").innerHTML === "X" && document.querySelector("#f").innerHTML === "X" && document.querySelector("#s").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;
    var audio = new Audio("success.mp3");
        audio.play();
  }
  else if(document.querySelector("#t").innerHTML === "X" && document.querySelector("#fi").innerHTML === "X" && document.querySelector("#e").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#th").innerHTML === "X" && document.querySelector("#si").innerHTML === "X" && document.querySelector("#n").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#o").innerHTML === "X" && document.querySelector("#fi").innerHTML === "X" && document.querySelector("#n").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#th").innerHTML === "X" && document.querySelector("#fi").innerHTML === "X" && document.querySelector("#s").innerHTML === "X"){
    document.querySelector("h1").innerHTML = n1 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#o").innerHTML === "O" && document.querySelector("#t").innerHTML === "O" && document.querySelector("#th").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";
    count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#f").innerHTML === "O" && document.querySelector("#fi").innerHTML === "O" && document.querySelector("#si").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#s").innerHTML === "O" && document.querySelector("#e").innerHTML === "O" && document.querySelector("#n").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#o").innerHTML === "O" && document.querySelector("#f").innerHTML === "O" && document.querySelector("#s").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#t").innerHTML === "O" && document.querySelector("#fi").innerHTML === "O" && document.querySelector("#e").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#th").innerHTML === "O" && document.querySelector("#si").innerHTML === "O" && document.querySelector("#n").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#o").innerHTML === "O" && document.querySelector("#fi").innerHTML === "O" && document.querySelector("#n").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(document.querySelector("#th").innerHTML === "O" && document.querySelector("#fi").innerHTML === "O" && document.querySelector("#s").innerHTML === "O"){
    document.querySelector("h1").innerHTML = n2 + " wins!";count = 9;var audio = new Audio("success.mp3");
    audio.play();
  }
  else if(count == 9){
    document.querySelector("h1").innerHTML = "Draw!";
    var audio = new Audio("draw.mp3");
    audio.play();
    
  }
  console.log(count);
  count = count + 1;
  console.log(clickedId);
  
  }
  );



  

function  put(clickedId, st){
  // if(document.querySelector("#o").innerHTML == document.querySelector("#t").innerHTML==document.querySelector("#th").innerHTML == "X"){
  //   document.querySelector("h1").innerHTML = n1 + " wins!";

    switch (clickedId) {
        case "o":
            document.querySelector("#o").innerHTML = st
            break;
        case "t":
          document.querySelector("#t").innerHTML = st
          break;
        case "th":
            document.querySelector("#th").innerHTML = st
            break;
        case "f":
          document.querySelector("#f").innerHTML = st
          break;
          case "fi":
            document.querySelector("#fi").innerHTML = st
            break;
        case "si":
          document.querySelector("#si").innerHTML = st
          break;
          case "s":
            document.querySelector("#s").innerHTML = st
            break;
        case "e":
          document.querySelector("#e").innerHTML = st
          break;
          case "n":
            document.querySelector("#n").innerHTML = st
            break;
        
        default:
            alert("Invalid key: " + clickedId );
            break;
}
}

