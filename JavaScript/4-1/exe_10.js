let pieces = "KNIGHT";
pieces = pieces.toLowerCase();
switch (pieces) {
  case 'pawn':
    console.log ("Peão se move pra frente e 'come' em diagonal. 1 casa por vez");
    break;
  case 'rook':
    console.log ("Torre se movimenta horizontal e verticalmente. Sem limite de casas");
    break;
  case 'knight':
    console.log ("Cavalo se movimenta em forma de 'L', duas casas para a frente e uma para o lado. Pode pular outras peças");
    break;
  case 'bishop':
    console.log ("Bispo se movimenta em linha reta na diagonal. Sem limite de casas");
    break;
  case 'queen':
    console.log ("Rainha se movimenta horizontal, vertical e diagonalmente. Não tem limite de casas");
    break;
  case 'king':
    console.log ("Rei se movimenta horizontal, vertical e diagonalmente. 1 casa por vez");
    break;
  default:
    console.log ("Peça inválida");
    break;
}