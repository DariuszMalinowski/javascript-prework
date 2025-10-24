


let randomNumber = Math.floor(Math.random() * 3 + 1);

if (randomNumber == 1){
    computerMove = 'KAMIEŃ';
} else if (randomNumber == 2){
    computerMove = 'PAPIER';
} else if (randomNumber == 3){
    computerMove = 'NORZYCE';
} else {
    computerMove = "nieznany ruch"
}

printMessage('jestem komputerem i zagrałem ' + computerMove);


let playerMove = 'papier';
