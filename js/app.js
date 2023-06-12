var inputbox = document.querySelector('.input-wrap input')
var addbtn = document.querySelector('.btn')
var list = document.querySelector('.list')

addbtn.addEventListener('click',function(event){

    var listItem = document.createElement('li')
    listItem.classList.add('list-item')
    listItem.textContent = inputbox.value 

    list.appendChild(listItem)
    inputbox.value = ''
})