let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let savedEntries = count + "-"
    saveEl.innerText += savedEntries
    count = 0
    countEl.innerText = count
}

// I'll work on it later:
// function reset() {
//     count = 0
//     countEl = 0
//     saveEl.innerText += " "
// }