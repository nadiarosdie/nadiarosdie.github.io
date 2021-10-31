let btnPalWord = document.getElementById("btnPalWord")
btnPalWord.addEventListener("click", function(){
    let yourWord = document.getElementById("inputPalWord").value

    palChecker(yourWord)
})

function palChecker(word){
    let wordArr = word.toLowerCase().split('');
    let newArr = wordArr.join('')
    let reverseArr = [...newArr].reverse().join('')
    
    if(newArr == reverseArr){
        alert("Your word : (" + word + ")  is a Palindrome word")
    } else {
        alert("Your word : (" + word + ")  is not a Palindrome word")
    }
}