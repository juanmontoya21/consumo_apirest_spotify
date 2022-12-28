//GENERAR UN TOKEN AUTOMATICO
//URI
const URI="https://accounts.spotify.com/api/token"

//DATOS DE ENVIOS
const DATO1="grant_type=client_credentials"
const DATO2="client_id=e6ca61db66a744a092bc0bf7cc90ec1b"
const DATO3="client_secret=8a2a8952b64049038f309949399ef187"

//PETICION
const PETICION={
    method: "POST",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//FETCH
// fetch(URI,PETICION)
// .then(function(respuesta){
//     return respuesta.json()
// })
// .then(function(respuesta){
//     console.log(respuesta)
// })
// .catch(function(respuesta){
//     console.log(respuesta)
// })
//ASYNC AWAIT

export async function obtenerToken(){
    let respuesta=await fetch(URI,PETICION)
    return await respuesta.json()
}
console.log(await obtenerToken())