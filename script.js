const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =  [
    {
        enunciado:
             "Qual plataforma de IA você mais usa ?"
        alternativas :[
            "chat gpt ou chatgpt Brasil"
        ],
       },
       {
       enunciado:
       "Você acha a IA importante ?"
      alternativas:[
        "sim ou não"
      ],
      },
      {
        enunciado:
        "Você usa alguma IA para estudo ?"
        alternativas:[
            "sim ou não"
        ],
        },
        {
          enunciado:
          "Oque é inteligência artificial ?"
          alternativas:[
            "Um tipo de rede social automatizada ou Um sistema que simula a inteligência humana e aprende com dados"
          ],
          }, 

          let atual = 0;
          let perguntaAtual;

          function mostraPergunta() {
             perguntaAtual = perguntas[atual];
             caixaPerguntas.textContent = perguntaAtual.enunciado;
             mostraAlternativas();
               }

          function mostraAlternativas(){  
            for(const alternativa of perguntaAtual.alternativas){  
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
                  }
                 }
               function respostaSelecionada(opcaoSelecionada){ 
               const afirmacoes = opcaoSelecionada.afirmacoes;
               atual++;   
           mostraPergunta();      
           }
           function mostraResultado() {
             caixaPerguntas.textContent = "Em 2049...";
             textoResultado.textContent = historiaFinal;
             caixaAlternativas.textContent = "";
             
          
              } 
           mostraPerguntas();

