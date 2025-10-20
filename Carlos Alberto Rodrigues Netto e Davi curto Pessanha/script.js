
document.getElementById('nome').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});


const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('contador');

mensagem.addEventListener('input', () => {
    const restante = 300 - mensagem.value.length;
    contador.textContent = `${restante} caracteres restantes`;
    if (restante <= 0){
        contador.style.color = "red";
    }
    else if(restante<=50){
        contador.style.color = "#b97b00ff";
    }
    else{
        contador.style.color  = "gray";
    }
});


document.getElementById('telefone').addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '');
     if (valor.length > 11) {
        valor = valor.slice(0, 11);
    }
    if (valor.length > 10) {

        telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;

    } else if (valor.length > 6) {

        telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6, 10)}`;

    } else if (valor.length > 2) {

        telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;

    } else {
        telefone.value = valor;
    }
});
