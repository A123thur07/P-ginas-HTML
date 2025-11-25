const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const resultado = document.getElementById('result');
const r_maior_menor_igual = document.getElementById('maior_menor_igual');
const r_pares = document.getElementById('pares');
const r_multiplos = document.getElementById('multiplus');
const r_soma_par_impar = document.getElementById('soma_par_impar');
const negativo = document.getElementById('1ºnegativo');

// Para calcular
function somar() {
    resultado.textContent = Number(numero1.value) + Number(numero2.value);
    verificações()
}
function subtrair() {
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
    verificações()
}
function multiplicar() {
    resultado.textContent = Number(numero1.value) * Number(numero2.value);
    verificações()
}
function dividir() {
    resultado.textContent = Number(numero1.value) / Number(numero2.value);
    verificações()
}
function reset() {
    numero1.value = "";
    numero2.value = "";
    resultado.innerHTML = "";
    verificações()
}

// Para verificações
function verificações() {
    maior_menor_igual();
    pares();
    multiplos();
    soma_par_impar();
    soma_maior();
    primeiro_negativo()
}
function maior_menor_igual() {
    if (Number(numero1.value) > Number(numero2.value)) {
        r_maior_menor_igual.textContent = "O número 1 é maior que o número 2"
    } else if (Number(numero2.value) > Number(numero1.value)) {
        r_maior_menor_igual.textContent = "O número 2 é maior que o número 1"
    } else {
        r_maior_menor_igual.textContent = "Os dois são iguais"
    }
}
function pares() {
    if (Number(numero1.value) % 2 == 0 & Number(numero2.value) % 2 == 0) {
        r_pares.textContent = "Os dois são pares"
    } else if (Number(numero1.value) % 2 == 1 & Number(numero2.value) % 2 == 0) {
        r_pares.textContent = "Apenas o 2º número é par"
    } else if (Number(numero1.value) % 2 == 0 & Number(numero2.value) % 2 == 1) {
        r_pares.textContent = "Apenas o 1º número é par"
    } else {
        r_pares.textContent = "Nenhum é par"
    }
}
function multiplos() {
    if (Number(numero1.value) % Number(numero2.value) == 0) {
        r_multiplos.textContent = "O 1º número é múltiplo do 2º número"
    } else if (Number(numero2.value) % Number(numero1.value) == 0) {
        r_multiplos.textContent = "O 2º número é múltiplo do 1º número"
    } else {
        r_multiplos.textContent = "Não são multiplus"
    }
}
function soma_par_impar() {
    if ((Number(numero1.value) + Number(numero2.value)) % 2 == 0) {
        r_soma_par_impar.textContent = "a soma dos dois é par"
    } else {
        r_soma_par_impar.textContent = "a soma dos dois é ímpar"
    }
}
function soma_maior() {
    if ((Number(numero1.value) + Number(numero2.value)) > 10) {
        r_soma_par_impar.textContent = "A soma dos dois número é maior que 10"
    } else {
        r_soma_par_impar.textContent = "A soma dos dois número é menor que 10"
    }
}
function primeiro_negativo() {
    if (Number(numero1.value) < 0) {
        negativo.textContent = "✔"
    } else {
        negativo.textContent = "❌"
    }
}