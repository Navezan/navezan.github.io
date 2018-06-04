var car1 = document.getElementById("car1");

window.onscroll = function(){

console.log("yo, yo, yo");

var fromLeft = window.pageXOffset;

console.log(fromLeft)

// car1.innerHTML = fromLeft + "px";

car1.style.left = fromLeft *1.10 + "px";

// submarine.style.border=fromTop/100 + "px solid blue"

if(fromLeft > 3250){
 car1.style.transform="rotate("+fromLeft + "deg)";
 car1.style.transform="rotate(0 deg)";
 // car1.style.backgroundColor="red";
}
// else{
//   car1.style.transform="rotate("+fromLeft + "deg)";
// }
}
