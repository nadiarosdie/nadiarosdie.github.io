//Get element and assign variable
let recipeForm = document.querySelector("#recipe-form")
let recipeContainer = document.querySelector("#recipe-container")
let listItems = []


//EventListeners
recipeForm.addEventListener("submit", saveRecipe)


//Functions
function saveRecipe(i) {
    i.preventDefault();
    // console.log(i)
    let name = recipeForm.querySelector("#name").value;
    let prepTime = recipeForm.querySelector("#prepTime").value;
    let category = recipeForm.querySelector("#category").value;
    let ingredient = recipeForm.querySelector("#ingredient").value;
    let instruction = recipeForm.querySelector("#instruction").value;
    let notes = recipeForm.querySelector("#notes").value;
    let coverImage = recipeForm.querySelector("#coverImg").value;

    let newRecipe = {
        name,
        prepTime,
        category,
        ingredient,
        instruction,
        notes,
        coverImage,
        id: Date.now(),
    }

    // console.log(newRecipe);
    listItems.push(newRecipe)
    i.target.reset();
    displayRecipe();
}

function displayRecipe() {
    let temp = listItems.map(item => `
    <div class="col">
    <div class="card mb-3">
        <img src="${item.coverImage}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
            <ul class="text-start">
                <li><strong>Preparation Time: </strong>${item.prepTime}</li>
                <li><strong>Category: </strong>${item.category}</li>
                <li><strong>Ingredient: </strong>${item.ingredient}</li>
                <li><strong>Instruction: </strong>${item.instruction}</li>
                <li><strong>Notes: </strong>${item.notes}</li>
            </ul >
            <button class="btn btn-lg btn-outline-danger" aria-label="Delete ${item.name}" value="${item.id}">Delete Recipe</button>
        </div>
      </div>
    `)
recipeContainer.innerHTML = temp;
}


//Delete recipe
// recipeContainer.addEventListener("click", i => {
//     if(i.target.matches(".btn-outline-danger")){
//         deleteRecipeFromList(Number.(i.target.value))
//     }
// })

// function deleteRecipeFromList(id){
//     listItems = listItems.filter(item => item.id !== id);
//     recipeContainer.dispatchEvent(new CustomEvent("refreshRecipes"))
// }

