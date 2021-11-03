let addRecipeBtn = document.getElementById("btnAddRecipe")
let recipeForm = document.querySelector("#recipe-form")
let recipeContainer = document.querySelector("#recipe-container")


addRecipeBtn.addEventListener("click", function () {
    let userName = document.getElementById("name");
    let nameVal = userName.value;

    let userPrepTime = document.getElementById("prepTime");
    let prepTimeVal = userPrepTime.value;

    let userCategory = document.getElementById("category");
    let categoryVal = userCategory.value;

    let userIngredient = document.getElementById("ingredient");
    let ingredientVal = userIngredient.value;

    let userInstruction = document.getElementById("instruction");
    let instructionVal = userInstruction.value;

    let userNotes = document.getElementById("notes");
    let notesVal = userNotes.value;

    let userCoverImage = document.getElementById("coverImg");
    let coverImageVal = userCoverImage.value;

    let id_no = Date.now();

    addRecipeTable(nameVal, prepTimeVal, categoryVal, ingredientVal, instructionVal, notesVal, coverImageVal, id_no);
    displayRecipe(nameVal, prepTimeVal, categoryVal, ingredientVal, instructionVal, notesVal, coverImageVal, id_no)
})


//store in sheety
function addRecipeTable(userName, userPrepTime, userCategory, userIngredient, userInstruction, userNotes, userCoverImage, id_no) {
    let url = 'https://api.sheety.co/4677a70e7b5b2beb30bd3c56fcb6bfba/tongResepi/myResepi';
    let body = {
        myresepi: {
            idNo: id_no,
            name: userName,
            prepTime: userPrepTime,
            category: userCategory,
            ingredient: userIngredient,
            instruction: userInstruction,
            notes: userNotes,
            coverImg: userCoverImage

        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.myResepi);
            alert(json.myResepi.name + " added in TongResepi. TQ")
        });
}


//display AddedRecipe
function displayRecipe(nameVal, prepTimeVal, categoryVal, ingredientVal, instructionVal, notesVal, coverImageVal, id_no) {
    let temp = `
    <div class="col">
    <div class="card mb-3">
        <img src="${coverImageVal}" class="card-img-top" alt="${nameVal}">
        <div class="card-body">
            <ul class="text-start">
                <li><strong>Preparation Time: </strong>${prepTimeVal}</li>
                <li><strong>Category: </strong>${categoryVal}</li>
                <li><strong>Ingredient: </strong>${ingredientVal}</li>
                <li><strong>Instruction: </strong>${instructionVal}</li>
                <li><strong>Notes: </strong>${notesVal}</li>
            </ul >
            <a href="myResepi.html"><button class="btn btn-lg btn-outline-primary btn-sm" aria-label="Manage ${nameVal}">Manage Your TongResepi</button></a>
        </div>
      </div>
    `
    recipeContainer.innerHTML = temp;

}