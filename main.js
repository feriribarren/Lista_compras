document.addEventListener("DOMContentLoaded", function(){
 
  const button= document.querySelector('.button')
  const input= document.querySelector('.input')
  const list= document.querySelector('.list')
  const BorrarTodo= document.querySelector('.BorrarTodo')
  const ListaCompras=[]

  input.focus()
 
  function agregarItem(){  
      input.classList.remove("invalidinput")      
      const itemNuevo=input.value
 
      if (!itemNuevo==""){

      if (!ListaCompras.includes(itemNuevo)){
      ListaCompras.push(itemNuevo)
//    console.log(ListaCompras)

      const item = document.createElement("div")
      item.append(itemNuevo)

      const BotonBorrar = document.createElement("button")
      BotonBorrar.innerHTML="X"
 
      BotonBorrar.onclick = function() {
      input.classList.remove("invalidinput")
      list.removeChild(item)
      const Indice = ListaCompras.indexOf(itemNuevo)
      ListaCompras.splice(Indice,1)
//    console.log(ListaCompras)
      }	

      item.append(BotonBorrar)

      list.append(item)
      input.value=""    
    }
  } else { 
    
    input.classList.add("invalidinput") 
    }
    
 
}




  button.addEventListener("click", function(){
  agregarItem()
  })

  input.addEventListener("keyup", function(event){
    if (event.key==="Enter"){
      agregarItem()
    }
  })

  BorrarTodo.onclick = function() {
    input.classList.remove("invalidinput")
    for (i=1;i<=ListaCompras.length;i++){
      list.removeChild(list.lastElementChild)
    }
    ListaCompras.splice(0)
//  console.log(ListaCompras)
    input.focus()
  }
  
})