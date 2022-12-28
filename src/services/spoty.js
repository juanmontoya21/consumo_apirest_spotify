import {URI,PETICION} from '../helpers/Datospetcion.js'
import {consultarCanciones} from './servicioConsultarCanciones.js'
import {pintarCanciones} from '../controller/controladorPintarCanciones.js'

//consumir un API=(CONSUMIR UN SERVICIO)
let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

//renderizo los DATOS
pintarCanciones(canciones.tracks)