$(document).ready(function() {

  $('#staticBackdrop').modal('show');
  //$("#resultGame").modal('show');
 

  $('#button_start_game').click(function() {
    capturaDadosDeJogadores();
  })
  $("td").click(function(){
    if ($(this).html()==""){
      preencherColunaJogoDaVelha(this);

    }
  });

  $("#button-player-one-win").click(function(){
    adicionaValorAoRank("one");
  })

  $("#button-player-two-win").click(function(){
    adicionaValorAoRank("two");
  })

  $("#button-player-nobody-win").click(function(){
    adicionaValorAoRank ("nobody");
  });

  $('#resultGame').on('show.bs.modal', function(event){
    numeroDeRodadas = 0;
  })

});

function capturaDadosDeJogadores(){
  var jogador1 = $('input[name="input-jogador1"]').val();

  var jogador2 = $('input[name="input-jogador2"]').val();

  var salvarEIniciar = true;
  
  if (jogador1 ==''){
    alert("Preencha o campo o nome do primeiro jogador");
    salvarEIniciar = false;

  }

  if (jogador2 =='') {
    alert("Preencha o campo o nome do segundo jogador");
    salvarEIniciar = false;
  }
  if (salvarEIniciar ==true){
    $('#staticBackdrop').modal('hide');
    preenheceNomeJogadores();
    $('#game').show ('slow');

  }
 
}

function preenheceNomeJogadores(){

 var jogador1 = $("input[name='input-jogador1']").val();
 var jogador2 = $("input[name='input-jogador2']").val();

 $("#span_player_one, #button-player-one-win").html(jogador1);
 $("#span_player_two, #button-player-two-win").html(jogador2);

}

var ultimaJogada = "";
var numeroDeRodadas = 0;

function preencherColunaJogoDaVelha(coluna) {

  var jogadaAtual;
  if (ultimaJogada == ""){
    jogadaAtual = "X";
  }
  if (ultimaJogada == "O"){
    jogadaAtual = "X"
  }

  if (ultimaJogada =="X"){
    jogadaAtual = "O";

  }
    ultimaJogada = jogadaAtual;

    $(coluna).html(jogadaAtual);

    numeroDeRodadas = numeroDeRodadas + 1;

  if (numeroDeRodadas == 9){
    $("#resultGame").modal('show');
  

  }

}

var scorePlayerOne = 0;
var scorePlayerTwo = 0;

function adicionaValorAoRank(vencedor) {

  if (vencedor == "one"){
    scorePlayerOne = scorePlayerOne + 1;

  }

  if (vencedor == "two"){
    scorePlayerTwo = scorePlayerTwo + 1;
  }

  $("#span_player_one_score").html(scorePlayerOne);

  $("#span_player_two_score").html(scorePlayerTwo);

  $("#resultGame").modal('hide');
  
  $("td").html("");
}