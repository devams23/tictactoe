var divElement = document.querySelector(".game-board");
var n1 = prompt("Enter the Player1 name:");
var n2 = prompt("Enter the Player2 name:");
document.querySelector("h2").innerHTML = n1 +"'"+"s"+" Turn"
count = 1
divElement.addEventListener("click", function (event) {
  var clickedId = event.target.id;
  
  if (count % 2 == 0  && count <=9){
    put(clickedId, "O");
    document.querySelector("h2").innerHTML = n1 +"'"+"s"+" Turn";
  }
  else 
  {
    if(count <=9)
    {
      put(clickedId, "X");
      document.querySelector("h2").innerHTML = n2 +"'"+"s"+" Turn";
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
