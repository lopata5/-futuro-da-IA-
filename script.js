const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual plataforma de IA você mais usa?",
        alternativas: [
            "Chat GPT",
            "ChatGPT Brasil"
        ]
    },
    {
        enunciado: "Você acha a IA importante?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "Você usa alguma IA para estudo?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "O que é inteligência artificial?",
        alternativas: [
            "Um tipo de rede social automatizada",
            "Um sistema que simula a inteligência humana e aprende com dados"
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.textContent = ''; // Limpar alternativas anteriores
    for (const alternativa of perguntas[atual].alterna
