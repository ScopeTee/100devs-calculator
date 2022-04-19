// const zero = document.querySelector('.zero')
// const one = document.querySelector('.one')
const two = document.querySelector('.two')
// const three = document.querySelector('.three')
const four = document.querySelector('.four')
// const five = document.querySelector('.five')
// const six = document.querySelector('.six')
// const seven = document.querySelector('.seven')
// const eight = document.querySelector('.eight')
// const nine = document.querySelector('.nine')
// const add = document.querySelector('.addition')
// const minus = document.querySelector('.minus')
// const multiplication = document.querySelector('.multiply')
// const division = document.querySelector('.divide')
// const dot = document.querySelector('.dot')
// const reset = document.querySelector('.clear')
// const equals = document.querySelector('.equals')

let result = 0
document.getElementById('showAnswer').innerHTML = result

// reset.addEventListener('click', () => {
//     result = 0
//     document.getElementById('showAnswer').innerHTML = result
// })

two.addEventListener('click', () => {
    // result += Number(two.value)
    document.getElementById('showAnswer').innerHTML = two.textContent
    console.log(two.textContent)
 })

 four.addEventListener('click', () => {
    // result += Number(two.value)
    document.getElementById('showAnswer').innerHTML = four.textContent
    console.log(four.textContent)
 })

// const calculator = document.querySelector(".Calculator")
// const keys = document.querySelector(".buttons")

// keys.addEventListener('click', (event) => {
//     if (event.target.matches ('div')){
//         console.log(event)
//         // document.getElementById('showAnswer').innerHTML = event

//     }
// })