//CONDICIONAIS DE DATA
//Data atual para o calculo da aprovação
let dataAtual = new Date();
//Data de marcação do evento (ano, mes e dia, considerando que a contagem do mes se inicia em 0)
let dataDoEvento = new Date(2021, 9,25);
//Condicional para marcação do Evento, permitindo apenas datas posteriores a atual
if (dataDoEvento > dataAtual) {
    console.log("Data do evento autorizada")
} else{
    console.log("Data inválida para marcação")
}

//CONDICIONAIS DE IDADE
//idade do participante 
let idade = 21;
//Condicional de idade minima de 18 anos para permitir cadastro
if (idade >=18) {
    console.log("Cadastro Permitido")
} else {
   console.log("Cadastro não permitido por idade") 
}

//CONDICIONAIS DE NÚMERO DE PARTICIPANTES/PALESTRANTES
//lista de participantes/palestrantes do envento
let participantes = ["João", "Pedro", "Maria", "Fernanda", "José"]
//Condicional para numero maximo de 100 participantes 
if (participantes.length <=100) {
    console.log("Cadastro Permitido")
} else {
    console.log("Cadastro não permitido por exceder a capacidade de 100 pessoas")
}

