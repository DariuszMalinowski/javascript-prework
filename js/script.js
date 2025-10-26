// Wyniki
let wins = 0;
let losses = 0;
let draws = 0;

// Gra
function playGame(playerInput) {

    clearMessages()

    // Liczenie ruchu komputera
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // rozkodowanie ruchu obu graczy
    function getMoveName(randomNumber){
        if (randomNumber == 1) {
            return 'KAMIEŃ';
        } else if (randomNumber == 2) {
            return 'PAPIER';
        } else if (randomNumber == 3) {
            return 'NOŻYCE';
        } else {
        printMessage('Nie znam ruchu o id ' + randomNumber + '.');
            return 'nieznany ruch';
        }
    }

    //Ruchy graczy
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput)

    console.log('Ruch komputera to: ' + computerMove);
    console.log('Ruch gracza to: ' + playerMove);

    let argcomputerMove = computerMove;
    let argplayerMove = playerMove;

    // Warunki opcji wygranej i przegranej
    let gameresult = Math.floor(Math.random() * 3 + 1);

    if (gameresult == 1){
        gameResultWin = 'BRAWO WYGRAŁEŚ!';
    } else if (gameresult == 2){
        gameResultWin = 'SUPER CI IDZIE!';
    } else if (gameresult == 3){
        gameResultWin = 'WYGRANA, OBY TAK DALEJ!!!';
    } else {
        gameResultWin = "WYGRANA";
    }

    if (gameresult == 1){
        gameResultDefeat = 'NIESTETY NIE TYM RAZEM!';
    } else if (gameresult == 2){
        gameResultDefeat = 'PRZEGRAŁEŚ ALE NIE PODDAWAJ SIĘ!';
    } else if (gameresult == 3){
        gameResultDefeat = 'TYM RAZEM PRZEGRAŁEŚ';
    } else {
        gameResultDefeat = "PRZEGRANA";
    }

    console.log('wyniki', gameResultWin, gameResultDefeat);
    console.log('ruchy', argcomputerMove, argplayerMove);

    //Wyświetlanie wyników
    function displayResult (argcomputerMove, argplayerMove){
        printMessage("Komputer wybrał " + argcomputerMove + " a ty " + argplayerMove);
    if(argcomputerMove == 'KAMIEŃ' && argplayerMove == 'PAPIER'){
        printMessage(gameResultWin);
        wins++;
    } else if (argcomputerMove == 'PAPIER' && argplayerMove == 'NOŻYCE'){
        printMessage(gameResultWin);
        wins++;
    } else if (argcomputerMove == 'NOŻYCE' && argplayerMove == 'KAMIEŃ'){
        printMessage(gameResultWin);
        wins++;
    } else if (argcomputerMove == 'PAPIER' && argplayerMove == 'KAMIEŃ'){
        printMessage(gameResultDefeat);
        losses++;
    } else if (argcomputerMove == 'NOŻYCE' && argplayerMove == 'PAPIER'){
        printMessage(gameResultDefeat);
        losses++;
    } else if (argcomputerMove == 'KAMIEŃ' && argplayerMove == 'NOŻYCE'){
        printMessage(gameResultDefeat);
        losses++;
    } else if (argcomputerMove == 'PAPIER' && argplayerMove == 'PAPIER'){
        printMessage('REMIS!');
        draws++;
    } else if (argcomputerMove == 'NOŻYCE' && argplayerMove == 'NOŻYCE'){
        printMessage('REMIS!');
        draws++;
    } else if (argcomputerMove == 'KAMIEŃ' && argplayerMove == 'KAMIEŃ'){
        printMessage('REMIS!');
        draws++;
    } else {
        printMessage('BRAK ZWYCIĘZCY');
    }
    }

    displayResult(argcomputerMove, argplayerMove);
    updateScoreboard();

    // Wyniki gry
    function updateScoreboard() {
        document.getElementById('wins').textContent = wins;
        document.getElementById('losses').textContent = losses;
        document.getElementById('draws').textContent = draws;
    }
}

// Przyciski
document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});
