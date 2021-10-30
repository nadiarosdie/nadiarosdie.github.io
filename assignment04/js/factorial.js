let calFactBtn = document.getElementById("calFact")
calFactBtn.addEventListener("click", function () {
    //console.log("calculate button clicked!")
    let number = document.getElementById("factNum").value    

    calculateFact(number)
})


function calculateFact(number){
    let f = 1;
    console.log(number)
    if (number<0)  
       document.getElementById("result").innerHTML = "<strong>Please input positive integer!</strong>"
    if (number==0) 
        document.getElementById("result").innerHTML = "Factorial for " + number + " = <strong>1</strong>"
    for (let i=1; i<=number; i++){
        f *= i;
        document.getElementById("result").innerHTML = "Factorial for " + number + " = <strong>" + f + "</strong>"
    }   
}

