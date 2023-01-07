let fild = document.createElement('fieldset')
let creatinput1 = document.createElement('input')
let addclass1 = creatinput1.classList.add('input1')
creatinput1.placeholder = 'نام کاربری'
creatinput1.type = 'text'

creatinput1.name = "username"




fild.appendChild(creatinput1)

document.querySelector('form').appendChild(fild)


let eror = document.createElement("p")
eror.classList.add('erorr')
eror.innerText = ''

document.querySelector('form').appendChild(eror)







let fild1 = document.createElement('fieldset')
let legend1 = document.createElement('legend')
legend1.innerText = 'رمز عبور'
let creatinput2 = document.createElement('input')
let addclass2 = creatinput2.classList.add('input2-3')
creatinput2.minLength = '8'
creatinput2.type = 'password'

creatinput2.name = "password2"



fild1.appendChild(legend1)
fild1.appendChild(creatinput2)
document.querySelector('form').appendChild(fild1)



let eror1 = document.createElement("p")
eror1.classList.add('erorr')


document.querySelector('form').appendChild(eror1)






let fild2 = document.createElement('fieldset')
let legend2 = document.createElement('legend')
legend2.innerText = 'تایید رمز عبور'
let creatinput3 = document.createElement('input')
creatinput3.type = 'password'

creatinput3.minLength = '8'
creatinput3.name = "password2"

let addclass3 = creatinput3.classList.add('input2-3')

fild2.appendChild(legend2)
fild2.appendChild(creatinput3)
document.querySelector('form').appendChild(fild2)







let eror2 = document.createElement("p")
eror2.classList.add('erorr')

document.querySelector('form').appendChild(eror2)






// //////////////////////////////////button///////////////////////////////////////


let createbutton = document.createElement('button')
createbutton.type = 'Submit'
createbutton.innerText = 'ثبت نام'
document.querySelector('form').appendChild(createbutton)






// /////////button function ///////
let form = document.querySelector('form')


let username = document.querySelector('input')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let userNameValue = creatinput1.value;
    let passwordValue = creatinput2.value;
    let repeatpasswordValue = creatinput3.value;

    if (passwordValue !== repeatpasswordValue) {
        eror2.innerText = "رمزهای وارد شده یکسان نیست!!"
    }
    else {
        eror2.innerText = ""
    };
    if (!userNameValue) {
        eror.innerText = 'الزامی'
        eror1.innerText = 'الزامی'
        eror2.innerText = 'الزامی'
    };
})



