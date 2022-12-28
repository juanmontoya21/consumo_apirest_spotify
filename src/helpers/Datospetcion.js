import {obtenerToken} from '../services/servicioGenerarToken.js'

const ID_ARTISTA="1wGIhYkKWSq4yACtTkCkSX"

let Tokenramdon=await obtenerToken()

let token=Tokenramdon.token_type+" "+Tokenramdon.access_token

//1. PARA DONDE VOY
export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

//configurar la peticion 
export const PETICION={
    method: "GET",
    headers: {
        Authorization:token
    }
}