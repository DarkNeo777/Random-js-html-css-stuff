//document.getElementById("count-el").innerText = 5  

// let firstBatch = 5

// let count = firstBatch

// console.log(count)

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0 
function increment(){
    count = count + 1
    countEl.innerText = count
}

let people = document.getElementById("save-el")
let message = "People entered: "

function save(){
    console.log(count)
    people.innerText = message + count
}
