// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// se importa el arreglo desde database
import {coders} from '../../public/data/database.js'
import {index, create, deleteId} from './operaciones.js'
import { alertSmallSuccess } from './alerts.js'





const tbody=document.querySelector('tbody')
const table=document.querySelector('table')

const nameForm =document.querySelector("#name")
const lastNameForm =document.querySelector("#last-name")
const emailForm =document.querySelector("#email")
const form=document.querySelector("form")
index(coders,tbody)
form.addEventListener("submit", function (event) { //siempre se debe colocar event o e, mejor event
 
    create(nameForm, lastNameForm, emailForm, coders)
    alertSmallSuccess("El coder fué ingresado correctamente")
    form.reset() // Limpia el formulario
    index(coders,tbody)

    // alert(`El coder ${newCoder.name} ${newCoder.lastName} 
    
    // con correo ${newCoder.email} ha sido agregado
    // con exito`)

   

    event.preventDefault()
})


table.addEventListener("click", function (event) {
    // if (event.target.classlist.contains("btn-danger")) {
    //     alertSmallSuccess("Le diste clikck al boton")
    // }else{
    
    
    //     alertSmallSuccess("Le diste click a la tabla")
    // }

   
    deleteId(coders, event)
   
      
    alertSmallSuccess("Coder deleted")
    index(coders,tbody)

})

