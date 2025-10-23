// Seleciona os elementos do HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de perguntas (objeto de dados)
const perguntas = [
    {
        enunciado: "Qual plataforma de IA você mais usa?",
        alternativas: [
            "Chat GPT",
            "Outra plataforma (Bard, Gemini, etc.)" // Alterei para ser mais genérico
        ]
    },
    {
        enunciado: "Você acha a IA importante para o futuro do trabalho?",
        alternativas: [
            "Sim, é essencial",
            "Não, é um hype passageiro"
        ]
    },
    {
        enunciado: "Você usa alguma IA para estudo ou pesquisa?",
        alternativas: [
            "Sim, frequentemente",
            "Não, prefiro métodos tradicionais"
        ]
    },
    {
        enunciado: "O que é Inteligência Artificial?",
        alternativas: [
            "Um tipo de rede social automatizada",
            "Um sistema que simula a inteligência humana e aprende com dados"
        ]
    }
];

let atual = 0; // Índice da pergunta atual
// Opcional: Variável para armazenar as escolhas ou resultados
// let historicoRespostas = []; 

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado(); // Se acabaram as perguntas, mostra o resultado
        return;
    }
    const perguntaAtual = perguntas[atual];
    // Atualiza o texto da caixa de perguntas
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.textContent = ''; // Limpa alternativas anteriores
    const alternativas = perguntas[atual].alternativas;

    // Itera sobre as alternativas e cria um botão para cada uma
    for (const alternativa of alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        // Adiciona um listener para quando o botão for clicado
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(alternativaSelecionada) {
    // Opcional: Armazenar a resposta (descomente se for usar historicoRespostas)
    // historicoRespostas.push(alternativaSelecionada);

    atual++; // Avança para a próxima pergunta
    mostraPergunta(); // Carrega a próxima pergunta (ou o resultado)
}

function mostraResultado() {
    // Esconde a caixa de perguntas e alternativas
    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');

    // Mostra a caixa de resultado
    caixaResultado.classList.remove('hidden'); 
    
    // Define o texto final
    textoResultado.textContent = "O questionário foi concluído! Obrigado por responder.";
    
    // Opcional: Se você armazenou as respostas, pode exibi-las aqui.
    // textoResultado.textContent += "\nSuas escolhas: " + historicoRespostas.join(", ");
}

// Inicia o processo chamando a função para mostrar a primeira pergunta
mostraPergunta();