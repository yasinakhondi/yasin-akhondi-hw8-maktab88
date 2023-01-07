let creatbox = document.createElement('div')
let h1 = document.createElement('h1')
h1.innerText = 'My Tasks'
creatbox.appendChild(h1)
document.body.appendChild(creatbox)



let creatbox2 = document.createElement('ol')
creatbox.appendChild(creatbox2)


let p1 = document.createElement('ul')
p1.innerText = 'I. user dashboard'


let p2 = document.createElement('ul')
p2.innerText = 'II. admin dashboard'


let p3 = document.createElement('ul')
p3.innerText = 'III. authentiction dashboard'

creatbox2.appendChild(p1)
creatbox2.appendChild(p2)
creatbox2.appendChild(p3)



let creatbox3 = document.createElement('ul')
creatbox.appendChild(creatbox3)

let l1 = document.createElement('li')
l1.innerText = 'Login'


let l2 = document.createElement('li')
let del = document.createElement('del')
del.innerText = 'rigester'


let l3 = document.createElement('li')
l3.innerText = 'Logout'

creatbox3.appendChild(l1)
creatbox3.appendChild(l2)
l2.appendChild(del)

creatbox3.appendChild(l3)




let creatbox4 = document.createElement('ul')
creatbox.appendChild(creatbox4)

let p4 = document.createElement('ul')
p4.innerText = 'IV. admin dashboard'


let p5 = document.createElement('ul')

let del2 = document.createElement('del')
del2.innerText = ' authentiction dashboard'
p5.innerText = 'V.'


creatbox4.appendChild(p4)
creatbox4.appendChild(p5)
p5.appendChild(del2)



let input = document.createElement('input')
creatbox.appendChild(input)

let button = document.createElement('button')
button.innerText = 'add task'
creatbox.appendChild(button)





// ./////////style/////

creatbox.style.border = '3px black solid'
creatbox.style.height = '320px'
creatbox.style.width = '400px'




h1.style.color = 'red'
h1.style.marginLeft = '20px'



creatbox2.style.marginLeft = '-30px'
creatbox2.style.textAlign = 'start'


creatbox3.style.marginLeft = '60px'


creatbox4.style.marginLeft = '-30px'

input.style.marginLeft = '40px'

button.style.marginLeft = '10px'

