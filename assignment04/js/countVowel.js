let btnInWord = document.getElementById("btnInputWord")
btnInWord.addEventListener("click", function(){
    console.log("button clicked!")
    let word = document.getElementById("inputWord").value

    countVowel(word)
})

function countVowel(word){
    let vowels = "aeiou"
    let count = 0

    for(i=0;i<word.length;i++){
        console.log(vowels.indexOf(word[i]))
        if(vowels.indexOf(word[i].toLowerCase()) > -1){
            count++
        }   
    }
    let pResult = document.getElementById("result")
    pResult.innerHTML = "Number of <strong>vowel(s)</strong> in above input: <span style=\"color: maroon; font-weight: bolder;\">" + count + "</span>"
    alert("Number of vowel(s) in the word/sentence of (" + word + ") : " + count )

}