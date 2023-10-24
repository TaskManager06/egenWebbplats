//Script för att importera footern automatiskt till alla sidor
//väntar på att sidan ska laddas klart
document.addEventListener("DOMContentLoaded", function () {  
//skapar footern
var footer = document.createElement("footer");
//lägger till texten i footern
footer.innerHTML = "Leo Ungsten --- Na22B";
//hämtar footerns container
var footerContainer = document.getElementById("footerContainer");
//skriver ut footerns container i konsolen för lättare felsökning
console.log(footerContainer); 
//lägger till footern i footerns container
footerContainer.appendChild(footer);
//skriver ut footern i konsolen för lättare felsökning
console.log("footer.js loaded");

}); 