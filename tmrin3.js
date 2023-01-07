////////////div1//////////

let div1 = document.createElement('div')
let classs1 = div1.classList.add('div1')
let p1 = document.createElement('p1')
p1.innerText = '/Parent nodes text/'

div1.appendChild(p1)
document.body.appendChild(div1)

////////////div2//////////

let div2 = document.createElement("div")
let classs2 = div2.classList.add('div2')
let p2 = document.createElement('p2')
p2.innerText = ' /The target node/ '

div2.appendChild(p2)
div1.appendChild(div2)



////////////div3//////////

let div3 = document.createElement("div")
let classs3 = div3.classList.add('div3')
let p3 = document.createElement('p3')
p3.innerText = ' /The main node child node/'

div3.appendChild(p3)
div2.appendChild(div3)





// ////////////style/////////////

let div11 = document.querySelector('.div1')

div11.style.border = '1px solid black'
div11.style.height = "400px"
div11.style.width = '500px'
div11.style.backgroundColor = "#75fb4c"
div11.style.padding = '0px 20px'






let div22 = document.querySelector('.div2')

div22.style.border = '1px solid black'
div22.style.height = "300px"
div22.style.width = '400px'
div22.style.backgroundColor = "#75fb4c"
div22.style.padding = '0px 20px'
div22.style.marginTop = '50px'




let div33 = document.querySelector('.div3')

div33.style.border = '1px solid black'
div33.style.height = "200px"
div33.style.width = '280px'
div33.style.backgroundColor = "#75fb4c"
div33.style.padding = '0px 20px'
div33.style.marginTop = '50px'


// /////////////button////////

let creatButton1 = document.createElement('button')
let cls1 = creatButton1.classList.add('cpt')
let value1 = creatButton1.textContent = 'COPY PARENT TEXT'
document.body.appendChild(creatButton1)



let creatButton2 = document.createElement('button')
let cls2 = creatButton2.classList.add('cct')
let value2 = creatButton2.textContent = 'COPY CHILD TEXT'
document.body.appendChild(creatButton2)


creatButton1.style.marginTop = '20px'
creatButton1.style.marginRight = '20px'


///////////////////function//////////

let getbutton1 = document.querySelector('.cpt')


getbutton1.onclick = function () {
    p2.innerHTML = `${p1.innerText} ${p2.innerText} ${p3.innerText}`
}


let getbutton2 = document.querySelector('.cct')

getbutton2.onclick = function () {
    p2.innerHTML = `${p3.innerText}${p2.innerText} `
}