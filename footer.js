
  
  
document.addEventListener("DOMContentLoaded", function () {  
  // Create a new footer element
var footer = document.createElement("footer");
    // Add content to the footer
footer.innerHTML = "Leo Ungsten --- Na22B";
console.log("footer.js loaded");
    // Append the footer to the container div
var footerContainer = document.getElementById("footerContainer");
console.log(footerContainer); // Check if footerContainer is correctly found.
footerContainer.appendChild(footer);


}); // End of DOMContentLoaded