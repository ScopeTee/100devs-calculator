let numbers = document.querySelectorAll(".number")
let btn = document.querySelectorAll("button")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("calculate")
let display = document.getElementById("showAnswer")

btn.forEach((item) =>{
    item.onclick = (e) => {
    switch (e.target.innerText){
        case '=':
        //  display.innerText = eval(display.innerText)
        try{
            display.innerText = eval(display.innerText)
        } catch {
            display.innerText = 'Syntax Error'
    }
        break;
        default:
      display.innerText += e.target.innerText    
}
        if(item.innerText == 'AC'){
            console.log('clear')
            display.innerText = ''
        }
    }
})


// let maximumLength = display.innerText.max





































































































