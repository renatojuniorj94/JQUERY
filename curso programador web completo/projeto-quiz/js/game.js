/*var qtdPerguntas = 3*/
const perguntasFeitas = []

//Perguntas do jogo
const pergunta = [
    {
        pergunta: "Qual dessas linguagens não é considerada uma linguagem de programação",
        respostas: ["PHP",
        "JavaScript",
        "C++",
        "HTML"
        ],
        correta: "resp3" 
    },
    {
        pergunta: "Em que ano o Brasil foi descoberto?",
        respostas: ["1498",
        "1500",
        "1375",
        "1828"
        ],
        correta: "resp1" 
    },
    {
        pergunta: "O que significa a sigla HTML?",
        respostas: ["Hyper Tonto Maluco Legal",
        "Hyper Text Markup Language",
        "Hey Trade More Language",
        "Hype Text Mark Lang"
        ],
        correta: "resp1" 
    },
    {
        pergunta: "Qual dessas linguagens é considerada uma linguagem de programação",
        respostas: ["HTML",
        "JavaScript",
        "C++",
        "PHP"
        ],
        correta: "resp0" 
    }
]

//Lendo quantas perguntas nós temos dentro da 'const' 'pergunta' de forma dinâmica 
var qtdPerguntas = pergunta.length - 1

gerarPergunta(qtdPerguntas)

function gerarPergunta(maxPerguntas){
    //Gerar um número aleatório
    let aleatorio = (Math.random() * maxPerguntas).toFixed()
    //Convertendo para número
    aleatorio = Number(aleatorio)

    //Verificar se a pergunta sorteada já foi feita
    if (!perguntasFeitas.includes(aleatorio)){
        //Colocar como pergunta feita
        perguntasFeitas.push(aleatorio)

        //Preencher o HTML com os dados da questão sorteada
        var p_selecionada = pergunta[aleatorio].pergunta
        console.log(p_selecionada)

        //Colocando a pergunta do sorteio na tag <h2>
        $("#pergunta").html(p_selecionada)

        //Colocando as respostas
        /* var resp0 = pergunta[aleatorio].respostas[0]
        var resp1 = pergunta[aleatorio].respostas[1]
        var resp2 = pergunta[aleatorio].respostas[2]
        var resp3 = pergunta[aleatorio].respostas[3]

        $("#resp0").html(resp0)
        $("#resp1").html(resp1)
        $("#resp2").html(resp2)
        $("#resp3").html(resp3) */

        //Outra maneira de fazer
        for (var i = 0; i < 4; i++) {
            $("#resp" + i).html(pergunta[aleatorio].respostas[i])
        }

        //Embaralhando as respostas
        var pai = $("#respostas")
        var botoes = pai.children()

        for(var i = 1; i < botoes.length; i++) {
            pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)))
        }
    }
}