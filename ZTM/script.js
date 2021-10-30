// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
//     console.log("click");
// }) 

// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function(){
//     console.log("mouseenter");
// }) 

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


button.addEventListener("click", function(){

    if (input.value.length >0 ) {
        // console.log("click is working");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

    }
})

input.addEventListener("keypress", function(){


    if (input.value.length >0 && event.keyCode === 13 ) {
        // console.log("click is working");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

    }
})
