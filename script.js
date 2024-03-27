// Diccionario de reemplazo
let diccionario = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar
function encriptar() {
    let texto = document.getElementById('textoParaEncriptar').value;
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i).toLowerCase();
        if (diccionario[char]) {
            resultado += diccionario[char];
        } else {
            resultado += texto.charAt(i);
        }
    }
    document.getElementById('textoEncriptado').value = resultado;
}

// Función para desencriptar
function desencriptar() {
    let texto = document.getElementById('textoEncriptado').value;
    let resultado = texto;
    for (let clave in diccionario) {
        let valor = diccionario[clave];
        let regex = new RegExp(valor, 'g');
        resultado = resultado.replace(regex, clave);
    }
    document.getElementById('textoParaEncriptar').value = resultado;
}



