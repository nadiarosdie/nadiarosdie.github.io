let calFactBtn = document.getElementById("calFact")
calFactBtn.addEventListener("click", function () {
    //console.log("calculate button clicked!")
    let number = document.getElementById("factNum").value    

    calculateFact(number)
})


function calculateFact(number){
    let f = 1;

    if (number<0) {
        alert("Please input positive integer!") 
    } else if (number==0) {
        alert("Factorial for " + number + " = 1") 
    } else {
        for (let i=1; i<=number; i++){
            f *= i;}
            alert("Factorial for " + number + " = " + f)
    }
}