// ==================================================
// PEGANDO OS ELEMENTOS DO HTML
// ==================================================

// Botão de aceitar
const aceitar = document.getElementById("aceitar");

// Botão de recusar
const recusar = document.getElementById("recusar");

// Lugar onde vamos mostrar a resposta
const resposta = document.getElementById("resposta");

// Imagem do café bonito
const imagemCafe = document.getElementById("imagemCafe");

// Imagem do café derramado
const imagemDerramada =
    document.getElementById("imagemDerramada");


// ==================================================
// CONTADOR
// ==================================================

// Começamos com zero tentativas
let tentativas = 0;


// ==================================================
// FRASES DO BOTÃO
// ==================================================

const frases = [

    "Tem certeza? 👀",

    "Pensa bem...",

    "Não foge 😭",

    "Olha que eu vou ficar triste..."

];


// ==================================================
// QUANDO O MOUSE PASSAR PELO BOTÃO
// ==================================================

recusar.addEventListener("mouseover", () => {

    // Se já chegou no "Eu desisto",
    // não faz mais nada
    if (tentativas >= 4) {
        return;
    }


    // Aumenta o número de tentativas
    tentativas++;


    // ==============================================
    // TROCA A FRASE DO BOTÃO
    // ==============================================

    recusar.innerHTML =
        frases[tentativas - 1];


    // ==============================================
    // ÚLTIMA TENTATIVA
    // ==============================================

    if (tentativas === 4) {

        // Volta para a posição original
        recusar.style.position =
            "relative";

        recusar.style.left =
            "0px";

        recusar.style.top =
            "0px";


        // Texto definitivo
        recusar.innerHTML =
            "Eu desisto 😔";


        // Permite clicar
        recusar.style.cursor =
            "pointer";


        return;
    }


    // ==============================================
    // PEGANDO A ÁREA DOS BOTÕES
    // ==============================================

    const area =
        document.querySelector(".buttons");


    // Largura disponível
    const largura =
        area.clientWidth;


    // Altura disponível
    const altura =
        area.clientHeight;


    // ==============================================
    // CALCULANDO UMA POSIÇÃO ALEATÓRIA
    // ==============================================

    const novaPosicaoX =
        Math.random() *
        (largura - recusar.offsetWidth);


    const novaPosicaoY =
        Math.random() *
        (altura - recusar.offsetHeight);


    // ==============================================
    // MOVE O BOTÃO
    // ==============================================

    recusar.style.position =
        "absolute";

    recusar.style.left =
        novaPosicaoX + "px";

    recusar.style.top =
        novaPosicaoY + "px";

});


// ==================================================
// BOTÃO "ACEITAR"
// ==================================================

aceitar.addEventListener("click", () => {

    // ==============================================
    // ESCONDE O CAFÉ DERRAMADO
    // ==============================================

    if (imagemDerramada) {

        imagemDerramada.style.display =
            "none";
    }


    // ==============================================
    // MENSAGEM
    // ==============================================

    resposta.innerHTML =
        "Eu sabia que você aceitaria! ☕🤎<br><br>" +
        "Agora vai tomar seu cafezinho, Yasmim. 😌";


    // ==============================================
    // AUMENTA O BOTÃO
    // ==============================================

    aceitar.style.transform =
        "scale(1.08)";


    // ==============================================
    // MOSTRA O CAFÉ BONITO
    // ==============================================

    if (imagemCafe) {

        imagemCafe.style.display =
            "block";
    }

});


// ==================================================
// BOTÃO "EU DESISTO"
// ==================================================

recusar.addEventListener("click", () => {

    // Só funciona depois que o botão
    // virou "Eu desisto"
    if (tentativas < 4) {
        return;
    }


    // ==============================================
    // ESCONDE O CAFÉ BONITO
    // ==============================================

    if (imagemCafe) {

        imagemCafe.style.display =
            "none";
    }


    // ==============================================
    // MENSAGEM
    // ==============================================

    resposta.innerHTML =
        "Tá bom... 😔<br><br>" +
        "Você recusou meu café...";


    // ==============================================
    // MOSTRA O CAFÉ DERRAMADO
    // ==============================================

    if (imagemDerramada) {

        imagemDerramada.style.display =
            "block";
    }


    // ==============================================
    // TRAVA O BOTÃO
    // ==============================================

    recusar.disabled =
        true;

    recusar.style.cursor =
        "default";

    recusar.style.pointerEvents =
        "none";

});