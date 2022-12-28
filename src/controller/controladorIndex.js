import {generarURI} from '../helpers/generarURI.js'
import {PETICION} from '../helpers/Datospetcion.js'
import { consultarCanciones } from '../services/servicioConsultarCanciones.js'
import {pintarCanciones} from './controladorPintarCanciones.js'


let  botonArtista=document.getElementById("botonBuscador")
botonArtista.addEventListener("click",function(evento){
    let artista=document.getElementById("artista")
    const URI=generarURI(artista.value)
    activarServcio()
    async function activarServcio(){
        let canciones=await consultarCanciones(URI,PETICION)
        console.log(canciones)
        pintarCanciones(canciones.tracks)
    }
    
}) 