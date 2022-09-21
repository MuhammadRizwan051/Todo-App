var field = document.getElementById('field')
var ul = document.getElementById('ul')
var main = document.getElementById('main_container')


function addbtn() {
    var list = document.createElement('li')
    var div = document.createElement('div')
    var divattr = div.setAttribute('class', 'row mx-0 mt-5 text-light border-bottom border-light pb-2')
    var span = document.createElement('div')
    var spantext = document.createTextNode(field.value)
    span.appendChild(spantext)
    div.appendChild(span)
    var spanattr = div.firstChild.setAttribute('class', 'col')
    list.appendChild(div)
    ul.appendChild(list)
    var listattr = list.setAttribute('style', 'list-style:none; font-size:25px')
    field.value = ''


    // Edit btn in li    
    var editdiv = document.createElement('div')
    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('')
    editbtn.appendChild(edittext)
    editdiv.appendChild(editbtn)
    div.appendChild(editdiv)
    var attredit = editbtn.setAttribute('onclick', 'editbtn(this)')
    var attreditdiv = editdiv.setAttribute('class', 'button_parent col-1 px-0 mx-3 me-sm-3 text-end')
    var attreditclass = editbtn.setAttribute('class', 'button btn h-100 fs-5 text-light fa-solid fa-pen-to-square')


    // Delete btn in li
    var deldiv = document.createElement('div')
    var delbtn = document.createElement('button')
    var deltext = document.createTextNode("")
    delbtn.appendChild(deltext)
    deldiv.appendChild(delbtn)
    div.appendChild(deldiv)
    var attrdel = delbtn.setAttribute('onclick', 'deletebtn(this)')
    var attrdeldiv = deldiv.setAttribute('class', 'button_parent col-1 p-0 text-end')
    var attrdelclass = delbtn.setAttribute('class', 'button btn h-100 fs-5 text-warning fa-solid fa-trash')



    // Clear All
    // var clearalldiv = document.createElement('div')
    // var clearallbtn = document.createElement('button')
    // var clearalltext = document.createTextNode("Clear All")
    // clearallbtn.appendChild(clearalltext)
    // clearalldiv.appendChild(clearallbtn)
    // main.appendChild(clearalldiv)
    // var attrclearall = clearallbtn.setAttribute('onclick', 'clearallbtn(this)')
    // var attrclearalldiv = clearalldiv.setAttribute('class', 'col-1 p-0 text-end')
    // var attrclearallclass = clearallbtn.setAttribute('class', 'btn h-100 fs-5 text-primary fa-solid fa-trash')}
}

function editbtn(e) {
    // var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    var val = prompt("Enter updated value", e.parentNode.parentNode.firstChild.innerText)
    e.parentNode.parentNode.firstChild.innerText = val
}

function deletebtn(e) {
    e.parentNode.parentNode.remove()
}

function clearallbtn() {
    ul.innerHTML = ''
}





    // Pending Task info
//     var pendingdiv = document.createElement('div')
//     var pendingpara = document.createElement('p')
//     var pendingparatext = document.createTextNode('You have 4 pending task')
//     var pendingparaattr = pendingpara.setAttribute('id', 'pending')

//     pendingpara.appendChild(pendingparatext)
//     pendingdiv.appendChild(pendingpara)
//     div.appendChild(pendingdiv)

//     var pendingparajs = document.getElementById('pending')
//     console.log(pendingparajs)
//     var list_length = ;
    
//     for (var i = 0; i < list_length; i++) {
//         if(list)
//         // list_length++
//         console.log(list_length)
//     }













// function addbtn() {
//     var row = document.createElement('div')

//     var list = document.createElement('li')
//     // var text = document.createTextNode(field.value)
//     // list.appendChild(text)
//     var span = document.createElement('span')
//     var spantext = document.createTextNode(field.value)
//     span.appendChild(spantext)
//     list.appendChild(span)
//     var attrspanclass = row.setAttribute('class','row bg-danger')
//     // var attrspanclass = list.firstChild.setAttribute('class','col-1 bg-danger')
//     // var attrlistclass = list.firstChild.nextSiblings.className('class', 'text-end')

//     row.appendChild(list)
//     ul.appendChild(row)

//     // ul.appendChild(list)


//     var attrliststyle = list.setAttribute('style','list-style:none; font-size:25px')
//     field.value = ''
