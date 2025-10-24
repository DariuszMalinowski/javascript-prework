


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to " + randomNumber);

if (randomNumber == 1){
    computerMove = 'KAMIEŃ';
} else if (randomNumber == 2){
    computerMove = 'PAPIER';
} else if (randomNumber == 3){
    computerMove = 'NORZYCE';
} else {
    computerMove = "NIEZNANY RUCH";
}
printMessage('Jestem komputerem i zagrałem ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

if (playerInput == 1){
    playerMove = 'KAMIEŃ';
} else if (playerInput == 2){
    playerMove = 'PAPIER';
} else if (playerInput == 3){
    playerMove = 'NORZYCE';
} else {
    playerMove = "NIEZNANY RUCH";
}
printMessage('Twój ruch to: ' + playerMove);


