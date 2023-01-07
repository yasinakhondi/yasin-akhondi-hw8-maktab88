let all = document.querySelector('.all')
let body = document.querySelector('body')

creattable(body, userData)

function creattable(parent, data) {

    let table = document.createElement('table')
    parent.appendChild(table)

    let thead = document.createElement('thead')
    table.appendChild(thead)


    let tbody = document.createElement('tbody')
    table.appendChild(tbody)




    let tr = document.createElement('tr')
    thead.appendChild(tr)



    let header = Object.keys(data[0])
    // console.log(getkey);

    header.unshift("row")
    // console.log(header);



    for (let i = 0; i < header.length; i++) {
        let th = document.createElement('th')
        tr.appendChild(th)

        th.innerText = header[i]
    }





    for (let i = 0; i < data.length; i++) {
        let tbodytr = document.createElement('tr')
        tbody.appendChild(tbodytr)

        let rowcell = document.createElement('td')
        tbodytr.appendChild(rowcell)

        rowcell.innerText = i + 1



        let getvalue = Object.values(data[i])

        // console.log(data[i]);

        for (let j = 0; j < getvalue.length; j++) {
            let td = document.createElement("td")
            tbodytr.appendChild(td)

            td.innerText = getvalue[j]
        }

    }

}






// /////////////////////////////  soal-7    ///////////////


// SORTING/////////

body.addEventListener('click', (e) => {
    let targt = e.target
    if (targt.innerHTML === "row") {
        return
    }
    if (targt.tagName === 'TH') {
        userData.sort((a, b) =>
            a[targt.innerHTML] - b[targt.innerHTML] ||
            a[targt.innerHTML].localeCompare(b[targt.innerHTML])
        );
        body.innerHTML = ''
        creattable(body, userData)
    }


    // console.log(`sort by ${e.target.innerText}`, userData);
})

///////// informtion//////////

let uid = document.querySelector('.uid')
let firstname = document.querySelector('.firstname')
let lastname = document.querySelector('.lastname')
let city = document.querySelector('.city')
let postalCode = document.querySelector('.postalCode')
let phoneNumber = document.querySelector('.phoneNumber')
let position = document.querySelector('.position')
let panel = document.querySelector('.panel')




body.addEventListener("dblclick", function (e) {


    let select = +e.target.parentElement.children[1].innerHTML

    let targetObj = userData.find(item => item.uid === select)

    panel.style.display = 'block'

    uid.innerText = targetObj.uid
    firstname.innerText = targetObj.firstname
    lastname.innerText = targetObj.lastname
    city.innerText = targetObj.city
    postalCode.innerText = targetObj.postalCode
    phoneNumber.innerText = targetObj.phoneNumber
    position.innerText = targetObj.position
})








///////////////  CRUD  ////////////////////////

// read

function read(input) {
    return input
}
console.log('read', read(userData));


///////creat/////////


let newObj = {
    uid: 11223344,
    firstname: 'yasin',
    lastname: 'Akhondi',
    city: 'tehran',
    postalCode: '2345676557',
    phoneNumber: '9811234234',
    position: 'front-End',
}
function creat(input, orglist) {

    for (const key of orglist) {
        if (input.uid === key.uid) {
            return "!!!!!!!!pleas enter new uid"
        }
    }
    for (const key of orglist) {
        if (input.uid !== key.uid) {
            return orglist.push(input), 'New person Creat'
        }
    }
}
// console.log(creat(newObj, userData));




// //////// update////////

let obj = {
    uid: 112233,
    firstname: 'yasinaaaaaaa',
    lastname: 'Akhondi',
    city: 'tehran',
    postalCode: '2345676557',
    phoneNumber: '9811234234',
    position: 'front-End',
}



function update(input) {
    let res = userData.find(function (item) {
        return item.uid === input.uid
    })
    if (!res) {
        return "user uid not found!!!!"
    }

    for (const key in input) {
        res[key] = input[key]
    }
    // console.log("succesfull");
    // console.log(res);

}


update(obj);

// console.log(userData);



// ///////////// delete////////

function delet(uid) {
    userData.forEach(function (item, index) {
        if (item.uid === uid) {
            userData.splice(index, 1)
            console.log('removed');
        }
        return userData
    })
}
// delet(112233)



