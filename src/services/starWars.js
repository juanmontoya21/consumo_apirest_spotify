//para donde voy
const URI="https://swapi.dev/api/species"

//configurar la peticion
const PETICION={
    method: "GET"
}
//consumo de API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()  
})
.then(function(respuesta){
    console.log(respuesta.results)
    let cuerpoTabla =document.getElementById("cuerpoTabla")
    let fila=document.getElementById("fila")

    respuesta.results.forEach(function(especie){
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add('card',"shadow","p-3",'h-100')

        let foto=document.createElement("img")
        foto.src=especie
        foto.classList.add("img-fluid")

        let nombre=document.createElement("h1")
        nombre.classList.add("text-center","fw-bold")
        nombre.textContent=especie.name

        let lenguaje=document.createElement("h4")
        lenguaje.classList.add("text-center","fw-bold")
        lenguaje.textContent=especie.language
        

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(lenguaje)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })


    respuesta.results.forEach(function(especie){

        let filaTabla=document.createElement("tr")
        
        let nombre =document.createElement("td")
        nombre.textContent=especie.name

        let colorOjo= document.createElement("td")
        colorOjo.textContent=especie.eye_colors

        let lenguaje=document.createElement("td")
        lenguaje.textContent=especie.language

        filaTabla.appendChild(nombre)
        filaTabla.appendChild(colorOjo)
        filaTabla.appendChild(lenguaje)
        cuerpoTabla.appendChild(filaTabla)

    })

})
.catch(function(error){
    console.log(error)
})