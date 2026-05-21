console.log(" INÍCIO DO TESTE DA TURMA ");
console.log(""); 


//
//EXEMPLO 1: Função que executa uma ação direta
//

// 1) Declarando a função (Criando a máquina)
function mostrarMensagem(texto) {
    console.log("Exemplo 1 -> Mensagem recebida:" + texto);
}


// 2) Executando a função (Ligando a máquina)
mostrarMensagem("Bem-vindos ao GitHub Codespaces!");
mostrarMensagem("Testando a minha primeira função!");


console.log("");

//
//EXEMPLO 2: Função que calcula e DEVOLVE um valor (return)
//

//1) Declarando a função que soma dois números
function calcularSoma(num1 , num2) {
    return num1 + num2; 
}

//2) Executando e mostrando o resultado direto no console
console.log("Exemplo2 -> O resultado da soma de 5 + 3 é:" + calcularSoma(5, 3));


//3) Executando e guardando o resultado em uma variável para usar depois 
let meuResultado = calcularSoma(10, 20);
console.log("Exemplo2 -> O resultado guardado na variável é:" + meuResultado);


console.log("");
console.log(" FIM DOS EXEMPLOS ");
