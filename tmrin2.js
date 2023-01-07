let creat = document.createElement('div')
let addclass = creat.classList.add('red-box')
document.body.appendChild(creat)


let get = document.querySelector('.red-box')

get.textContent = 'Hover over me!!'
get.style.backgroundColor = "red";
get.style.Color = "white";
get.style.width = "400px";
get.style.height = "300px";
get.style.border = "1px solid black"


get.onmouseover = function () {
    get.style.backgroundColor = "blue"
}

get.onmouseleave = function () {
    get.style.backgroundColor = "red"
}