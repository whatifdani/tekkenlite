var forward = 0;
var acha=0;
function abc() {
//   console.log(event.keyCode);
  console.log(event.keyCode);

  var character = document.getElementById("character");
  if(event.keyCode === 65){
    forward = forward + 10;
    character.style.left = forward + "px"
    character.style.width=600+"px"
    character.src = "images/dio-dashn.gif"
  }
  if(event.keyCode === 68){
    forward = forward - 10;
    character.style.left = forward + "px"
    character.src = "images/dio-walkb.gif"
  }
  if(event.keyCode === 87){
    forward = forward - 10;
    character.style.left = forward + "px"
    character.style.height=200+"px"
    character.src = "images/dio-jumpsuperstars-jump.gif"
    
  }
 
}
function ed(){
  
    var character = document.getElementById("character2");
    if(event.keyCode === 39){
      acha = acha + 10;
      character.style.right = acha + "px"
      character.style.width=600+"px"
      character.src = "images/earthquake-rollin.gif"
    }
    if(event.keyCode === 37){
      acha = acha - 10;
      character.style.rights = acha + "px"
      character.src = "images/earthquake-rollin.gif"
    }
    if(event.keyCode === 38){
      acha = acha - 10;
      character.style.top = acha + "px"
      character.src = "images/earthquake-buttbounce.gif"
      
    }
     
}

window.onkeydown = abc;
window.onkeyup = ed;