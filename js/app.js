//Nombrando variables
var box = document.getElementById("box");
var top = document.getElementById("top");
var bottom = document.getElementById("bottom");
var right = document.getElementById("right");
var left = document.getElementById("left");
var dissapear = document.getElementById("dissapear");
var color = document.getElementById("color");
var border = document.getElementById("border");

function runBox(e){
  var tabSelect = e.target.dataset.tabSelect;
  if(tabSelect === "tabtop"){
    box.classList.add("top-box");
    box.classList.remove("bottom-box");
    box.classList.remove("right-box");
    box.classList.remove("left-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("change-color-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tabbottom"){
    box.classList.add("bottom-box");
    box.classList.remove("top-box");
    box.classList.remove("right-box");
    box.classList.remove("left-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("change-color-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tabright"){
    box.classList.add("right-box");
    box.classList.remove("bottom-box");
    box.classList.remove("top-box");
    box.classList.remove("left-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("change-color-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tableft"){
    box.classList.add("left-box");
    box.classList.remove("right-box");
    box.classList.remove("bottom-box");
    box.classList.remove("top-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("change-color-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tabdissapear"){
    box.classList.add("dissapear-box");
    box.classList.remove("left-box");
    box.classList.remove("right-box");
    box.classList.remove("bottom-box");
    box.classList.remove("top-box");
    box.classList.remove("change-color-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tabcolor"){
    box.classList.add("change-color-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("left-box");
    box.classList.remove("right-box");
    box.classList.remove("bottom-box");
    box.classList.remove("top-box");
    box.classList.remove("border-box");
  }else if(tabSelect === "tabborder"){
    box.classList.add("border-box");
    box.classList.remove("change-color-box");
    box.classList.remove("dissapear-box");
    box.classList.remove("left-box");
    box.classList.remove("right-box");
    box.classList.remove("bottom-box");
    box.classList.remove("top-box");
  }
}

var load = function(){
var elementsTab= document.getElementsByClassName('tab');
for(var i=0; i<elementsTab.length; i++){
  elementsTab[i].addEventListener("click", runBox);
}
}

load();
