// 4 pillars of DOM 
// Selection of an element 
// Change in  HTML 
// Change in CSS
// Add Event Listner  

var a = document.querySelector("h1")
a.addEventListener("click", function() {
a.innerHTML = "DOM is Working Now "
a.style.color = "Blue"
a.style.backgroundColor = "#000"
a.style.fontSize = "70px"

});

var B = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0

btn.addEventListener("click", function(){
    if (flag === 0){
    B.style.backgroundColor = "Blue"
    flag = 1
    } else {
        B.style.backgroundColor = "transparent"
        flag = 0
    }
})
