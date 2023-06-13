const btnAdd = document.getElementById(`add`);
const ul=document.getElementById(`ul`)

btnAdd.addEventListener(`click`,addText)



function addText(){
    let data = document.getElementById(`inputText`).value
     if(data !==(``)){
        console.log(data)
        let li = document.createElement(`li`)
        li.textContent=data
        ul.appendChild(li)

     }else{
        console.log(`rien`)
     }
     

}