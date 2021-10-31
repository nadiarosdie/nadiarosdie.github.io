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
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class ="card-body">
            <h5 class ="card-title">Card title</h5>
            <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class ="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    )
}



//paste
function displayRecipes(){
    const tempString = listItems.map(item => `
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0">${item.name}</h4>
          </div>
          <div class="card-body">
            <ul class="text-start">
              <li><strong>Method: </strong>${item.method}</li>
              <li><strong>Roast: </strong>${item.roast}</li>
              <li><strong>Grind Size: </strong>${item.grind}</li>
              <li><strong>Ratio: </strong>${item.ratio}</li>
              ${!item.note.length ? "" : `<li><strong>Note: </strong>${item.note}</li>`}
            </ul>
            <button class="btn btn-lg btn-outline-danger" aria-label="Delete ${item.name}" value="${item.id}">Delete Recipe</button>
          </div>
        </div>
      </div>
      `).join('');
    recipeContainer.innerHTML = tempString;
  }