// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// se importa el arreglo desde database
import { coders } from '../../public/data/database.js'
import { index, create, deleteId } from './operaciones.js'
import { alertSmallSuccess } from './alerts.js'





const tbody = document.querySelector('tbody')
const table = document.querySelector('table')

const nameForm = document.querySelector("#name")
const lastNameForm = document.querySelector("#last-name")
const emailForm = document.querySelector("#email")
const form = document.querySelector("form")
let idParaActualizar

index(coders, tbody)
form.addEventListener("submit", function (event) { //siempre se debe colocar event o e, mejor event
    if (idParaActualizar === undefined) {
        create(nameForm, lastNameForm, emailForm, coders)
        alertSmallSuccess("El coder fué ingresado correctamente")
    } else {
        for (const coder of coders){
            if(coder.id== idParaActualizar){
                coder.name=nameForm.value
                coder.lastName=lastNameForm.value
                coder.email=email.value
            }

        }
        alertSmallSuccess("Updated")
    }

    form.reset() // Limpia el formulario
    index(coders, tbody)

    // alert(`El coder ${newCoder.name} ${newCoder.lastName} 

    // con correo ${newCoder.email} ha sido agregado
    // con exito`)



    event.preventDefault()
})


table.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")
        // const idToDelete = event.target.parentElement.parentElement.firstElementChild.textContent otra forma de obtener la imfocrmacion del id
        // console.log(idToDelete) 

        deleteId(coders, idParaEliminar)
        alertSmallSuccess("Coder deleted")
        index(coders, tbody)

    }

    if (event.target.classList.contains("btn-warning")) {
        idParaActualizar = event.target.getAttribute("data-id")
        const userFound = coders.find(coder => coder.id == idParaActualizar)

        nameForm.value = userFound.name
        lastNameForm.value = userFound.lastName
        emailForm.value = userFound.email


    }








})

