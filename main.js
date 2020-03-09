const list = document.querySelectorAll('li')
const button = document.getElementById('destroy-all')
const image = document.querySelectorAll('img')
const x = function(){
    for (let i=0; i<15; i++){
        list[i].style.textDecoration = 'line-through'
    }
    for (let i=15; i<list.length; i++){
        list[i].style.opacity = '0'
    }
    for (let i=0; i<image.length; i++){
        image[i].style.width = '0px'
    }
}
button.addEventListener('click', x)
