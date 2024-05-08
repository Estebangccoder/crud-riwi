// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// se importa el arreglo desde database
import {coders} from '../../public/data/database.js'
import {withForEach} from './operaciones'

const tbody=document.querySelector('tbody')

withForEach(coders,tbody)
