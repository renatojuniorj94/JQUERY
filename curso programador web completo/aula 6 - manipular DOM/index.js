//Emitindo um alerta com o conteúdo da TAG h1
/* $(document).ready(function() {
    var textoh1 = $('h1').html()
    alert(textoh1)
})
 */
$(document).ready(function() {
    $('#texto').blur(function() {
        var valor = $(this).val() //val = value
        alert('Foi digitado: ' + valor)
    })
})

$(document).ready(function() {
    $('#botao').click(function() {
        var link = $('#link').attr("href") //attr = attribute
        alert('O link vai para: ' + link)
    })
})

/* $(document).ready(function() {
    $('#botao').click(function() {
        var link = $('img').attr("src") //attr = attribute
        alert('O link vai para: ' + link)
    })
}) */

$(document).ready(function() {
    $('#botao1').click(function() {
        $('h1').text('Mudei o texto com jQuery')
    })

    $('#botao2').click(function() {
        $('h2').html('<b>Mudei o h2</b> com <i>jQuery</i>')
    })

    $('#botao3').click(function() {
        $('#texto').val('Renato Junior')
    }
    )
    $('#botao4').click(function() {
        $('#link').text('Ir para o site do Flamengo')
        $('#link').attr('href', 'https://www.flamengo.com.br/')
    })

    $('#botao5').click(function() {
        $('img').attr('src', 'https://www.gaveanews.com/wp-content/uploads/Logomarca-da-Adidas-ao-lado-do-escudo-do-Flamengo.webp')
    })


})

/* $(document).ready(function() {
    $('#botao2').click(function() {
        $('h2').html('<b>Mudei o h2</b> com <i>jQuery</i>')
    })
}) */