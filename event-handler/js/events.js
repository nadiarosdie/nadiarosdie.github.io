function transformUpperCase (_val) {
    return _val.toUpperCase();
}


//DOM event listener
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value)
})


function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan")
    let pass_val = elKataLaluan.value

    if(pass_val.length > 5) {
        alert("Password check....OK!")
    } else {
        alert("Password is too short!")
    }
}

//traditional DOM event handler
let elKL = document.getElementById("kataLaluan") 
elKL.onblur = checkPassword
