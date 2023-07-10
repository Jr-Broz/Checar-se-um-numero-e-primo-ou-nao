let numero = +prompt("escreva um numero")
let divisoes = 0;

for(i = 1; i <= numero; i++){

  if(numero % i == 0){

    divisoes++
  }
}

if(divisoes == 2) {

  console.log(`o numero ${numero} é primo`)
}
else{

  console.log(`o numero ${numero}  nao é primo`)
}
