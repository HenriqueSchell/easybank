var menuBtn = document.getElementById('menuBtn')
var menu = document.getElementById('menu')
var body = document.getElementById('body')

menuBtn.addEventListener('click', () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
        menuBtn.src = 'src/images/icon-close.svg'
    }else{
        menu.style.display = 'none'
        menuBtn.src = 'src/images/icon-hamburger.svg'
    }
})