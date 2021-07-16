const body = document.querySelector("body");
const elementoTable = document.createElement("table");
body.appendChild(elementoTable)
let valorDosDados = [];
let valorSomaDado = 0;
let cont = 0;
let item = 0;

const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function jogaDado() {
    elementoTable.innerHTML = "";
    let valorPrimeiroDado = 0;
    let valorSegundoDado = 0;
    for (let i = 0; i < 1000; i++) {
        valorPrimeiroDado = Math.floor(Math.random() * 6 + 1)
        valorSegundoDado = Math.floor(Math.random() * 6 + 1)
        valorSomaDado = valorPrimeiroDado + valorSegundoDado;
        valorDosDados[i] = valorSomaDado;

    }
    for (let i = 0; i < valorDosDados.length; i++) {

        for (let j = 2; j < count.length; j++) {
            if (valorDosDados[i] == j) {
                count[j] = count[j] + 1
            }

        }
    }
    for (let i = 2; i < count.length; i++) {
        const linha = document.createElement("tr");
        const colunaValor = document.createElement("td")
        const colunaValorRepiticao = document.createElement("td")
        elementoTable.appendChild(linha);
        let valorTexto = document.createTextNode(i + ":")
        let valorTextoRepiticao = document.createTextNode(count[i])
        linha.appendChild(colunaValor)
        colunaValor.appendChild(valorTexto)
        linha.appendChild(colunaValorRepiticao)
        colunaValorRepiticao.appendChild(valorTextoRepiticao)
    }


}
document.getElementById("imagem_dado").addEventListener("click", jogaDado)