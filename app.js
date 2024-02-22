


document.getElementById("TxtEncriptado").style.display = "block";




function EncriptarTxt(){

let mensaje = document.getElementById('Mensaje').value;



if(ValidarTexto(mensaje) && VerificarTexto(mensaje)){

    document.getElementById('TxtEncriptado').value = encriptarPalabra(mensaje.toLowerCase());
}


   
}

function ValidarTexto(texto){

    if (/[áéíóúÁÉÍÓÚ]/.test(texto)) {
    
        document.getElementById("textValidacion").style.color = "red";
        return false;
    }

    else{
        document.getElementById("textValidacion").style.color = "black";
        return true;
    }

}



function Copiar(){
    let mensaje = document.getElementById('TxtEncriptado').value;
    navigator.clipboard.writeText(mensaje);
}


function DesEncriptarTexto(){

    let MensajeEncriptado = document.getElementById('Mensaje').value;

    if(ValidarTexto(MensajeEncriptado) && VerificarTexto(MensajeEncriptado)){

        document.getElementById('TxtEncriptado').value = desencriptarPalabra(MensajeEncriptado.toLowerCase());
    
    }
    

   

    VerificarTexto(MensajeEncriptado);
   

}

function VerificarTexto(mensaje){

    if (mensaje.length > 0) {
   
        document.getElementById("TxtEncriptado").style.display = "block"
        document.getElementById("text-container").style.display = "none";
        document.getElementById("contenido-img").style.display = "none";
        document.getElementById("btncopia").style.display = "block"
        return true;
    }
    else{
        document.getElementById("text-container").style.display = "block";
        document.getElementById("contenido-img").style.display = "block";
        document.getElementById("btncopia").style.display = "none"
        document.getElementById('Mensaje').value = "";
        document.getElementById('TxtEncriptado').value = "";
        
        return false;
    }
   

}










function encriptarPalabra(palabra) {
    let encriptada = '';
    for (let i = 0; i < palabra.length; i++) {
        switch (palabra[i]) {
            case 'e':
                encriptada += 'enter';
                break;
            case 'i':
                encriptada += 'imes';
                break;
            case 'a':
                encriptada += 'ai';
                break;
            case 'o':
                encriptada += 'ober';
                break;
            case 'u':
                encriptada += 'ufat';
                break;
            default:
                encriptada += palabra[i];
        }
    }

    
    return encriptada;
}

function desencriptarPalabra(palabraEncriptada) {
    

    let desencriptada = palabraEncriptada
        .replace(/imes/g, "i")
        .replace(/enter/g, "e") 
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptada;
    
}




