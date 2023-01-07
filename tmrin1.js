const creatdiv = document.createElement('div')
const addClass = creatdiv.classList.add('box')
const text = creatdiv.textContent = 'Click here and watch the text changes'
document.body.appendChild(creatdiv)

let getclass = document.querySelector('.box')

getclass.style.backgroundColor = 'green'
getclass.style.height = '300px'
getclass.style.width = '400px'
getclass.style.color = "white"
getclass.style.padding = '15px';

// console.log(getclass.innerHTML);
// onclick
getclass.onclick = function () {
    getclass.innerHTML += "Click added some text!!"
}


