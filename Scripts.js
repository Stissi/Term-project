const darkmodeButton = document.querySelector("#darkmode")
 
function darkMode() {
   console.log("yur ")
   document.querySelector("body").classList.toggle("darkMode");
    if (document.querySelector("body").classList.contains("darkMode")) {
     document.querySelector("button").innerHTML = "Engage Light Mode"
   
    } else {
     document.querySelector("button").innerHTML = "Engage Dark Mode"
   }
   
}
 
darkmodeButton.addEventListener ("click", darkMode)
 
function myFunction() {
   var popup = document.getElementById("myPopup");
   popup.classList.toggle("show");
 }
