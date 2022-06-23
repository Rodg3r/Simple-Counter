const counter = document.getElementById('counter')
const buttons = document.querySelectorAll('button')
let counterNumber = 0


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerHTML === 'DECREASE'){
            counterNumber --
        }else if(button.innerHTML === 'INCREASE'){
            counterNumber ++
        }else if(button.innerHTML === 'RESET'){
            counterNumber = 0
        }

        if(counterNumber > 0){
            counter.style.color = 'green'
        }else if(counterNumber < 0){
            counter.style.color = 'red'
        }else{
            counter.style.color = 'black'
        }
        counter.innerHTML = counterNumber
    })
})