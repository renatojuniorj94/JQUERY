/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
let perguntasFeitas = [];

//PERGUNTAS DO JOGO
const perguntas = [
  //PERGUNTA 0
  {
    pergunta:
      "Qual dessas linguagens não é considerada uma linguagem de programação?",
    respostas: ["PHP", "Javascript", "C++", "HTML"],
    correta: "resp3"
  },
  //PERGUNTA 1
  {
    pergunta: "Em que ano o Brasil foi descoberto?",
    respostas: ["1498", "1500", "1375", "1828"],
    correta: "resp1"
  },
  //PERGUNTA 2
  {
    pergunta: "O que significa a sigla HTML?",
    respostas: [
      "Hyper Tonto Maluco Legal",
      "Hyper Text Markup Language",
      "Hey Trade More Language",
      "Hyper Text Mark Lang"
    ],
    correta: "resp1"
  },
  //PERGUNTA 3
  {
    pergunta:
      "Quais dessas linguagens é considerada uma linguagem de marcação?",
    respostas: ["HTML", "Javascript", "C++", "PHP"],
    correta: "resp0"
  },
  //PERGUNTA 4
  {
    pergunta: "Quantas vezes o Brasil não foi para copa?",
    respostas: ["Sempre foi", "2", "3", "1"],
    correta: "resp0"
  }
];

var qtdPerguntas = perguntas.length - 1;

gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas) {
  //GERAR UM NUMERO ALEATORIO
  let aleatorio = (Math.random() * maxPerguntas).toFixed();
  //CONVERTER PARA NUMERO
  aleatorio = Number(aleatorio);
  //MOSTRAR NO CONSOLE QUAL FOI A PERGUNTA SORTEADA
  console.log("A pergunta sorteado foi a: " + aleatorio);

  //VERIFICAR SE A PERGUNTA SORTEADA JÁ FOI FEITA
  if (!perguntasFeitas.includes(aleatorio)) {
    //COLOCAR COMO PERGUNTA FEITA
    perguntasFeitas.push(aleatorio);

    //PREENCHER O HTML COM OS DADOS DA QUESTAO SORTEADA
    var p_selecionada = perguntas[aleatorio].pergunta;
    console.log(p_selecionada);

    //ALIMENTAR A PERGUNTA VINDA DO SORTEIO
    $("#pergunta").html(p_selecionada);
    $("#pergunta").attr("data-indice", aleatorio);

    //COLOCAR AS RESPOSTAS
    for (var i = 0; i < 4; i++) {
      $("#resp" + i).html(perguntas[aleatorio].respostas[i]);
    }

    /*var resp0 = perguntas[aleatorio].respostas[0];
          var resp1 = perguntas[aleatorio].respostas[1];
          var resp2 = perguntas[aleatorio].respostas[2];
          var resp3 = perguntas[aleatorio].respostas[3];
  
          $("#resp0").html(resp0);
          $("#resp1").html(resp1);
          $("#resp2").html(resp2);
          $("#resp3").html(resp3); */

    //EMBARALHAR AS RESPOSTAS
    var pai = $("#respostas");
    var botoes = pai.children();

    for (var i = 1; i < botoes.length; i++) {
      pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)));
    }
  } else {
    //SE A PERGUNTA JÁ FOI FEITA
    console.log("A pergunta já foi feita. Sorteando novamente...");
    if (perguntasFeitas.length < qtdPerguntas + 1) {
      return gerarPergunta(maxPerguntas);
    } else {
      console.log("Abacabaram as perguntas!");

      $("#quiz").addClass("oculto");
      $("#mensagem").html("Parabéns você venceu. Acertou todas as perguntas!");
      $("#status").removeClass("oculto");
    }
  }
}

$(".resposta").click(function () {
  if ($("#quiz").attr("data-status") !== "travado") {
    //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
    resetaBotoes();

    //ADICIONAR A CLASSE SELECIONADA
    $(this).addClass("selecionada");
  }
});

$("#confirm").click(function () {
  //PEGAR O INDICE DA PERGUNTA
  var indice = $("#pergunta").attr("data-indice");

  //QUAL É A RESPOSTA CERTA
  var respCerta = perguntas[indice].correta;

  //QUAL FOI A RESPOSTA QUE O USUARIO SELECIONOU
  $(".resposta").each(function () {
    if ($(this).hasClass("selecionada")) {
      var respostaEscolhida = $(this).attr("id");

      if (respCerta == respostaEscolhida) {
        console.log("Aceeertou Miseraveeee!");
        proximaPergunta();
      } else {
        console.log("Errrrroooooooou!");
        $("#quiz").attr("data-status", "travado");
        $("#confirm").addClass("oculto");
        $("#" + respCerta).addClass("correta");
        $("#" + respostaEscolhida).removeClass("selecionada");
        $("#" + respostaEscolhida).addClass("errada");

        //4 segundos para dar game over
        setTimeout(function () {
          gameOver();
        }, 4000);
      }
    }
  });
});

function newGame() {
  $("#confirm").removeClass("oculto");
  $("#quiz").attr("data-status", "ok");
  perguntasFeitas = [];
  resetaBotoes();
  gerarPergunta(qtdPerguntas);
  $("#quiz").removeClass("oculto");
  $("#status").addClass("oculto");
}

function proximaPergunta() {
  resetaBotoes();
  gerarPergunta(qtdPerguntas);
}

function resetaBotoes() {
  //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
  $(".resposta").each(function () {
    if ($(this).hasClass("selecionada")) {
      $(this).removeClass("selecionada");
    }
    if ($(this).hasClass("correta")) {
      $(this).removeClass("correta");
    }
    if ($(this).hasClass("errada")) {
      $(this).removeClass("errada");
    }
  });
}

function gameOver() {
  $("#quiz").addClass("oculto");
  $("#mensagem").html("Game Over!");
  $("#status").removeClass("oculto");
}

$("#novoJogo").click(function () {
  newGame();
});
