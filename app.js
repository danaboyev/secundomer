let minuts = 00
let seconds = 00
let OutputMinut = document.getElementById('minuts')
let OutputSecond = document.getElementById('seconds')
let buttonStart = document.getElementById('btn-start')
let buttonStopt = document.getElementById('btn-stop')
let buttonReset = document.getElementById('btn-reset')
let Interval
buttonStart.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
})

buttonStopt.addEventListener('click', () =>{
    clearInterval(Interval)
})

buttonReset.addEventListener('click', () => {
    clearInterval(Interval)
    minuts = "00"
    seconds = "00"
    OutputSecond.innerHTML = seconds
    OutputMinut.innerHTML = minuts

})
function startTime(){
    seconds++
    if(seconds <= 9){
        OutputSecond.innerHTML = "0" + seconds  

    }
    if(seconds > 9 ){
        OutputSecond.innerHTML = seconds
    }
    if(seconds > 60 ){
        minuts++
        OutputMinut.innerHTML = "0" + minuts
        seconds = 0
        OutputSecond.innerHTML = "0" + seconds
    }
    if(minuts > 9){
        OutputMinut.innerHTML = minuts
    }

}