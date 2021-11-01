let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    console.log("refreshNowBtn clicked")
    getMyResepi()
})

function getMyResepi() {
    let url = 'https://api.sheety.co/fd2cdd93bab8c59a6a630bb4674c6292/tongResepi/myResepi';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.myResepi);

            let myResepiList = document.getElementById("recipeList")

            //delete all rows in the table
            for(let k = myResepiList.rows.length - 1; k>0; k--){
                myResepiList.deleteRow(k)
            }

            //load all rows from Sheety API
            for(let i = 0; i < json.myResepi.length; i++){
                let gResepiName = json.myResepi[i].name;
                let gPrepTime = json.myResepi[i].prepTime;
                let gCategory = json.myResepi[i].category;
                let gIngredient = json.myResepi[i].ingredient;
                let gInstruction = json.myResepi[i].instruction;
                let gNotes = json.myResepi[i].notes;
                let gCoverImg = json.myResepi[i].coverImg;
                let gId = json.myResepi[i].id;

                //add info to table - add row first
                let row = myResepiList.insertRow(myResepiList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gResepiName
                row.insertCell(2).innerHTML = gPrepTime
                row.insertCell(3).innerHTML = gCategory
                row.insertCell(4).innerHTML = gIngredient
                row.insertCell(5).innerHTML = gInstruction
                row.insertCell(6).innerHTML = gNotes
                row.insertCell(7).innerHTML = gCoverImg
                row.insertCell(8).innerHTML = ""







            }
            

        });
}
