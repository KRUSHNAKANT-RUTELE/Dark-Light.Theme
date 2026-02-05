let Night = document.querySelector('body')
let Togglebtn = document.getElementById('togglebtn')


function Theme(){
    Night.classList.toggle('Dark')
    if(Togglebtn.textContent=='🌙'){
        Togglebtn.textContent='☀️'
    } else{
        Togglebtn.textContent='🌙'
    }
}