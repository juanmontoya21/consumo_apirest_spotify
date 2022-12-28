export function generarURI(ID_ARTISTA){
    let URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`
    return URI
}