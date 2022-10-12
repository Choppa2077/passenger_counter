let count = 0
let countEl = document.getElementById("count-el")
function increment(){
    count = count +1
    countEl.textContent = count
}

let saveEl = document.getElementById("reset-el")

function save() {
    let both = count + " - "
   saveEl.textContent += both
   countEl.textContent= 0
   count = 0
}



