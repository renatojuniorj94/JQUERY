/*var qtdPerguntas = 3*/
let perguntasFeitas = []

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
        pergunta: "Qual dessas linguagens é considerada uma linguagem de marcação",
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

function gerarPergunta(maxPerguntas) {
    //Gerar um número aleatório
    let aleatorio = (Math.random() * maxPerguntas).toFixed()
    //Convertendo para número
    aleatorio = Number(aleatorio)

    //Verificar se a pergunta sorteada já foi feita
    if (!perguntasFeitas.includes(aleatorio)) {
        //Colocar como pergunta feita
        perguntasFeitas.push(aleatorio)

        //Preencher o HTML com os dados da questão sorteada
        var p_selecionada = pergunta[aleatorio].pergunta
        console.log(p_selecionada)

        //Colocando a pergunta do sorteio na tag <h2>
        $("#pergunta").html(p_selecionada)
        $("#pergunta").attr('data-indice', aleatorio)

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

        for (var i = 1; i < botoes.length; i++) {
            pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)))
        }
    } else {
        //Se a pergunta já foi feita
        console.log("A pergunta já foi feita. Sorteando novamente...")
        if (perguntasFeitas.length < qtdPerguntas + 1) {
            return gerarPergunta(maxPerguntas)
        } else {
            console.log("Acabaram as peguntas!")

            $('#quiz').addClass('oculto')
            $('#mensagem').html('Parabéns! Você acertou todas as perguntas!')
            $('#status').removeClass('oculto')
        }
    }
}

$(".resposta").click(function () {
    if ($('#quiz').attr('data-status') !== 'travado') {
        //Percorrendo todas as respostas e desmarcando classe selecionada
        /* $(".resposta").each(function () {
            if ($(this).hasClass("selecionada")) {
                $(this).removeClass("selecionada")
            }
        }) */

        resetaBotoes()

        //Adicionar a classe selecionada
        $(this).addClass('selecionada')
    }
})

$("#confirmar").click(function () {
    // Pegar o índice da pergunta
    var indice = $("#pergunta").attr('data-indice')

    // Qual é a resposta certa
    var respCerta = pergunta[indice].correta

    var respostaEscolhida = ""; // Declare aqui fora do loop

    // Qual foi a resposta que o usuário selecionou
    $(".resposta").each(function () {
        if ($(this).hasClass("selecionada")) {
            respostaEscolhida = $(this).attr('id');
        }
    })

    if (respCerta === respostaEscolhida) {
        console.log('Acertou!')
        proximaPergunta()
    } else {
        console.log('Erroooooooou!');
        $('#quiz').attr('data-status', 'travado')
/*         $('#confirmar').addClass('oculto')
 */        $('#' + respCerta).addClass('correta')
        $('#' + respostaEscolhida).removeClass('selecionada')
        $('#' + respostaEscolhida).addClass('errada')
        setTimeout(function () {
            gameOver()
        }, 4000)
    }
});

function newGame() {
/*     $('#confirmar').removeClass('oculto')
 */    $('#quiz').attr('data-status', 'ok')
    perguntasFeitas = []
    resetaBotoes()
    gerarPergunta(qtdPerguntas)
    $('#quiz').removeClass('oculto')
    $('#status').addClassClass('oculto')
}

function proximaPergunta() {

    resetaBotoes()
    gerarPergunta(qtdPerguntas)
}

function resetaBotoes() {
    $(".resposta").each(function () {
        if ($(this).hasClass("selecionada")) {
            $(this).removeClass("selecionada")
        }
        if ($(this).hasClass("correta")) {
            $(this).removeClass("selecionada")
        }
        if ($(this).hasClass("errada")) {
            $(this).removeClass("errada")
        }
    })
}

function gameOver() {
    $('#quiz').addClass('oculto')
    $('#mensagem').html('Game Over!')
    $('#status').removeClass('oculto')
}

$('#novoJogo').click(function () {
    newGame()
})

/*$("#confirmar").click(function () {
    //Pegar o indice da pergunta
    var indice = $("#pergunta").attr('data-indice')

    //Qual é a resposta certa
    var respCerta = pergunta[indice].correta

    //Qual foi a resposta que o usuario selecionou
    $(".resposta").each(function () {
        if ($(this).hasClass("selecionada")){
            var respostaEscolhida = $(this).attr('id')
    }
    })

    if (respCerta == respostaEscolhida) {
        alert('Acertou!')
    } else {
        alert('Erroooooooou!')
    }

}) */