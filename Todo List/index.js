function addtolist(){

    var taskname =document.getElementById('taskname').value 
    var tododiv =document.getElementById('mytodo')
    
    var newtodoitem=document.createElement('div')
    var todoname=document.createElement('li')
    todoname.innerHTML=taskname;
    var delBtn= document.createElement('i')
    delBtn.classList.add('far')
    delBtn.classList.add('fa-trash-alt')


    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(delBtn)
    
    tododiv.appendChild(newtodoitem)
    
}
var tododiv =document.getElementById('mytodo')
tododiv.addEventListener('click',deleteItem)

function deleteItem(e){
console.log('first')
    const ele = e.target
    if(ele.classList[0]== 'far'){
        ele.parentElement.remove()
    }
}