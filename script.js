var lamp = window.document.getElementById('lampada')

function itsBroken(){
    return lamp.src.indexOf('broken') > -1
}
function On(){
    if(!itsBroken()){
    lamp.src = 'on.svg'} 
}

function Off(){
    if(!itsBroken()){
        lamp.src = 'off.svg'}
}
lamp.addEventListener('click',broken)
function broken(){
    lamp.src = 'broken.svg' 
}