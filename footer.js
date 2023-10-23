
  
  
document.addEventListener("DOMContentLoaded", function () {  

    
var footer = document.createElement("footer");
footer.innerHTML = "Leo Ungsten --- Na22B";
console.log("footer.js loaded");
var footerContainer = document.getElementById("footerContainer");
console.log(footerContainer); 
footerContainer.appendChild(footer);


}); 