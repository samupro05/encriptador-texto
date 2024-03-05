const textArea = document.querySelector("#ingresa-text");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
    mensaje.style.backgroundImage = "none"
    document.querySelector(".msj-encriptado").setAttribute("hidden","true");
    document.querySelector(".msj").setAttribute("hidden","true");
    
}
// encriptar
function encriptar(stringEncriptada){
    let codMatriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < codMatriz.length; i++){
        if(stringEncriptada.includes(codMatriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codMatriz[i][0], codMatriz[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""
}



// desencriptar
function desencriptar(stringDesencriptada){
    let codMatriz = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < codMatriz.length; i++){
        if(stringDesencriptada.includes(codMatriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codMatriz[i][1], codMatriz[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto() {
    const textoEncriptado = mensaje.value;

    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            // Notificar al usuario que se ha copiado el texto
         alert('Texto copiado al portapapeles.');
        })


    
}
