var menuBtn = document.getElementById('menuBtn')
var menu = document.getElementById('menu')
var overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'flex'
        menuBtn.src = 'src/images/icon-close.svg'
        overlay.style.display = 'flex'
    }else{
        menu.style.display = 'none'
        menuBtn.src = 'src/images/icon-hamburger.svg'
        overlay.style.display = 'none'
    }
})