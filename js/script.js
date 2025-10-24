

// ruch komputera
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

//Ruch gracza
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

// Warunki opcji wygranej i przegranej
let gameresult = Math.floor(Math.random() * 3 + 1);
if (gameresult == 1){
    gameResultWin = 'BRAWO WYGRAŁEŚ!';
} else if (gameresult == 2){
    gameResultWin = 'SUPER CI IDZIE!';
} else if (gameresult == 3){
    gameResultWin = 'WYGRANA!!!';
} else {
    gameResultWin = "WYGRANA"
}

if (gameresult == 1){
    gameResultDefeat = 'NIESTETY NIE TYM RAZEM!';
} else if (gameresult == 2){
    gameResultDefeat = 'NIE PODDAWAJ SIĘ!';
} else if (gameresult == 3){
    gameResultDefeat = 'TYM RAZEM PRZEGRAŁEŚ';
} else {
    gameResultDefeat = "PRZEGRANA"
}

// Warunki gry
if(computerMove == 'KAMIEŃ' && playerMove == 'PAPIER'){
    printMessage(gameResultWin);
} else if (computerMove == 'PAPIER' && playerMove == 'NORZYCE'){
    printMessage(gameResultWin);
} else if (computerMove == 'NORZYCE' && playerMove == 'KAMIEŃ'){
    printMessage(gameResultWin);
} else if (computerMove == 'PAPIER' && playerMove == 'KAMIEŃ'){
    printMessage(gameResultDefeat);
} else if (computerMove == 'NORZYCE' && playerMove == 'PAPIER'){
    printMessage(gameResultDefeat);
} else if (computerMove == 'KAMIEŃ' && playerMove == 'NORZYCE'){
    printMessage(gameResultDefeat);
} else if (computerMove == 'PAPIER' && playerMove == 'PAPIER'){
    printMessage('REMIS!');
} else if (computerMove == 'NORZYCE' && playerMove == 'NORZYCE'){
    printMessage('REMIS!');
} else if (computerMove == 'KAMIEŃ' && playerMove == 'KAMIEŃ'){
    printMessage('REMIS!');
} else {
    printMessage('BRAK ZWYCIĘZCY');
}



